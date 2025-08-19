body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #121212;
  color: white;
}

.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background: #1f1f1f;
  padding: 20px;
  overflow-y: auto;
  animation: slideInRight 0.5s ease-in-out;
}

/* New style for the search bar */
#channelSearch {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #2c2c2c;
  color: white;
  position: sticky; /* Makes the search bar fixed at the top */
  top: 0;
  z-index: 10;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.sidebar li:hover {
  background: #ff5722;
}

.sidebar img {
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#player {
  width: 100%;
  height: 100%;
}

.controls {
  margin-top: 10px;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}