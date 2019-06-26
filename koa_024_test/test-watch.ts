import fs from 'fs'
import path from 'path'
import chokidar from 'chokidar'
import childProcess from 'child_process'


const watchDirBase = 'dist'
const testDirBase = 'test'


function _convertToTestFilePath(targetFilePath: string): string {
  return targetFilePath
    .split(path.sep)
    .map(elem => elem === watchDirBase ? testDirBase : elem )
    .join(path.sep)
    .replace(/\.js$/, '.ts')
}


function _existsFileSync(filePath: string): boolean {
    try {
      fs.statSync(filePath)
      return true
    } catch (err) {
      if (err.code === 'ENOENT') {
        return false
      }
      throw err
    }
}


function _runTest(testFilePath: string): void {
  childProcess.exec(`yarn test ${testFilePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr)
      return
    }
    console.log(stdout)
  })
}

function executeTestIfTestFileExists(targetFilePath: string) {

  const testFilePath = _convertToTestFilePath(targetFilePath)

  if (!_existsFileSync(testFilePath)) {
    console.log(`not found: ${testFilePath}`)
    return
  }

  console.log(`test: ${testFilePath}`)
  _runTest(testFilePath)
}


const watchingPath = `./${watchDirBase}/**/*.*`

const watcher = chokidar.watch(watchingPath, {
  ignored: /\.map$/,
  ignoreInitial: true,
  persistent: true,
})

watcher
  .on('add', path => {
    console.log(`add: ${path}`)
    executeTestIfTestFileExists(path)
  })
  .on('change', path => {
    console.log(`change: ${path}`)
    executeTestIfTestFileExists(path)
  })

process.on('beforeExit', () => {
  console.log('... exit watching')
  watcher.close()
})

console.log(`Watching ${watchingPath} ...`)
