#!/bin/bash

#El archivo no debe moverse de directorio o el script no funcionara.
cd target
konsole --noclose -e java -jar ensolvers-0.0.1-SNAPSHOT.jar
cd ..
cd ensolver_exam_view
konsole --noclose -e npm start
