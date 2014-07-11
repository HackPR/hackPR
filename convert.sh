#!/bin/bash
while read line
do
    remote="http://localhost:5000/$line"
    local="/Users/dbartolomei/Development/hackPR/public/$line/index.html"
    # echo $remote
    # echo $local
    curl -o $local --create-dirs $remote
done < $1




curl -o "/Users/dbartolomei/Desktop/hackPR_export/index.html" --create-dirs "http://localhost:5000/"