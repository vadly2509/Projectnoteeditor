/* Reset default margin and padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.container {
    width: 90%;
    margin: 0 auto;
}

.features ul {
    list-style: none;
    padding-left: 20px;
}

.features li {
    margin-bottom: 10px;
}

.visualization {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 20px;
}

#editor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

#editor {
    width: 80%;
    height: 200px;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    resize: none;
}

.controls {
    display: flex;
    gap: 10px;
}

button {
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
}
