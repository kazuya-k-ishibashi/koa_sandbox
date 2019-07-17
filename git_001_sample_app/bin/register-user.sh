#!/bin/bash


echo "{\"name\":\"$_name\",\"age\":$_age}"

curl localhost:3000/users \
    -X POST \
    -H "Content-Type:application/json" \
    -d "{\"name\":\"$_name\",\"age\":$_age}" \

