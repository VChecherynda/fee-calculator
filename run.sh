#!/bin/bash

read -p "Please provide path to the file with transactions: " filePath

filePath=${filePath}

node src/index.js "$filePath"
