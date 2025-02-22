# HopperHacks2025 Project

## Description
A website that dynamically takes in photos (if on mobile you can take a picture with the phone camera or upload an already existing photo). After taking in a photo and processing it, the program looks up existing manuals and instruction videos. It also includes a section that gives the user separate parts that can be bought in case the user lost them.

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   cd Client && npm install
   cd ../Server && npm install
   ```
3. Start the project:
   ```bash
   npm start
   ```

## Folder Structure
```
/c:/Users/jasow/HopperHacks2025/
├── Client/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── PhotoUpload.js
│   │   │   ├── Results.js
│   │   ├── App.js
│   │   ├── index.js
├── Server/
│   ├── index.js
│   ├── routes/
│   │   ├── upload.js
├── package.json
├── README.md
