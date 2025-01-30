import React from 'react'

function NumberSection() {
  return (
    <div class="numbers-con">
      <div class="numbers">
        <ul>
          <li>
            <img src={require("../public/User Icon.png")} />
            <h1>300k</h1>
            <small>Users active</small>
          </li>
          <li>
            <img src={require("../public/Artworks Icon.png")} />
            <h1>52,5k</h1>
            <small>Artworks</small>
          </li>
          <li>
            <img src={require("../public/Artists Icon.png")} />
            <h1>17,5k</h1>
            <small>Artists</small>
          </li>
          <li>
            <img src={require("../public/Wallet Icon.png")} />
            <h1>35.58</h1>
            <small>ETH spent</small>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NumberSection
