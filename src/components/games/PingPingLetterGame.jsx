import React, { useEffect } from "react";

const PingPingLeterGame = () => {
  useEffect(() => {
    const $ = (s, o = document) => o.querySelector(s);
    const $$ = (s, o = document) => o.querySelectorAll(s);

    var unsubscribe = $("#unsubscribe"),
      game = $(".game", unsubscribe),
      confirmButton = $(".confirm", unsubscribe),
      upButton = $(".controls .up", game),
      downButton = $(".controls .down", game),
      startButton = $(".start", game),
      closeButton = $(".close", game);

    var ball = {
        elem: $(".ball", game),
        x: 0,
        y: 0,
        top: 0,
        left: 0,
      },
      one = {
        elem: $(".paddle.one", game),
        y: 0,
        top: 0,
        score: 0,
      },
      two = {
        elem: $(".paddle.two", game),
        y: 0,
        score: 0,
      },
      interval;
    function init() {
      if (game.classList.contains("idle")) {
        one.y = game.offsetHeight / 2 - one.elem.offsetHeight / 2;
        two.y = game.offsetHeight / 2 - one.elem.offsetHeight / 2;
        start();
        game.classList.remove("idle");
        game.classList.add("init");
      }
    }
    startButton.addEventListener("click", init);
    confirmButton.addEventListener("click", (e) => {
      unsubscribe.classList.add("show-game");
    });
    closeButton.addEventListener("click", (e) => {
      unsubscribe.classList.add("hide-game");
      unsubscribe.classList.remove("show-game");
      setTimeout(() => unsubscribe.classList.remove("hide-game"), 800);
    });
    function start() {
      ball.x = game.offsetWidth / 2 - ball.elem.offsetWidth / 2;
      ball.y = game.offsetHeight / 2 - ball.elem.offsetHeight / 2;
      ball.top = Math.random() * 2 + 2;
      //ball.left = ((Math.random() < .5) ? 1 : -1) * (Math.random() * 2 + 2);
      ball.left = 1 * Math.random() * 2 + 2;

      interval = window.setInterval(render, 1000 / 60);
    }

    function render() {
      one.y += one.top;
      two.y = ball.y - two.elem.offsetHeight / 2;

      ball.x += ball.left;
      ball.y += ball.top;

      if (one.y <= 0) {
        one.y = 0;
      }

      if (two.y <= 0) {
        two.y = 0;
      }

      if (one.y >= game.offsetHeight - one.elem.offsetHeight) {
        one.y = game.offsetHeight - one.elem.offsetHeight;
      }

      if (two.y > game.offsetHeight - two.elem.offsetHeight) {
        two.y = game.offsetHeight - two.elem.offsetHeight;
      }

      if (ball.y <= 0 || ball.y >= game.offsetHeight - ball.elem.offsetHeight) {
        ball.top = -ball.top;
      }

      if (ball.x <= one.elem.offsetWidth - 2) {
        if (
          ball.y + ball.elem.offsetHeight / 2 > one.y &&
          ball.y + ball.elem.offsetHeight / 2 < one.y + one.elem.offsetHeight
        ) {
          ball.left = -ball.left;
        } else {
          two.score++;
          setTimeout(() => game.classList.add("idle"), 500);
          clearInterval(interval);
          //start();
        }
      }

      if (
        ball.x >=
        game.offsetWidth - ball.elem.offsetWidth - (two.elem.offsetWidth - 2)
      ) {
        if (
          ball.y + ball.elem.offsetHeight / 2 > two.y &&
          ball.y + ball.elem.offsetHeight / 2 < two.y + two.elem.offsetHeight
        ) {
          ball.left = -ball.left;
        } else {
          one.score++;
          setTimeout(() => game.classList.add("idle"), 500);
          clearInterval(interval);
          //start();
        }
      }

      one.elem.style.setProperty("--y", one.y + "px");
      two.elem.style.setProperty("--y", two.y + "px");
      ball.elem.style.setProperty("--x", ball.x + "px");
      ball.elem.style.setProperty("--y", ball.y + "px");
    }

    document.addEventListener(
      "keydown",
      (e) => {
        e.preventDefault();
        init();
        if (e.keyCode == 38 || e.which == 38) {
          one.top = -8;
        }
        if (e.keyCode == 40 || e.which == 40) {
          one.top = 8;
        }
      },
      false
    );

    document.addEventListener(
      "keyup",
      (e) => {
        e.preventDefault();
        init();
        if (e.keyCode == 38 || e.which == 38) {
          one.top = 0;
        }
        if (e.keyCode == 40 || e.which == 40) {
          one.top = 0;
        }
      },
      false
    );

    upButton.onmousedown = (e) => {
      init();
      one.top = -8;
    };

    downButton.onmousedown = (e) => {
      init();
      one.top = 8;
    };

    upButton.onmouseup = (e) => {
      one.top = 0;
    };

    downButton.onmouseup = (e) => {
      one.top = 0;
    };

    upButton.ontouchstart = (e) => {
      init();
      one.top = -8;
    };

    downButton.ontouchstart = (e) => {
      init();
      one.top = 8;
    };

    upButton.ontouchend = (e) => {
      one.top = 0;
    };

    downButton.ontouchend = (e) => {
      one.top = 0;
    };
  }, []);

  return (
    <>
      <div id="unsubscribe">
        <div class="letter">
          <div class="shadow"></div>
          <div class="background"></div>
          <div class="body">
            <div class="game idle">
              <div class="headline">
                <span>Win Ping Pong to unsubscribe</span>
                <div class="close">
                  <svg viewBox="0 0 24 24">
                    <path d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
                  </svg>
                </div>
              </div>

              <div class="paddle one"></div>
              <div class="ball"></div>
              <div class="paddle two"></div>

              <div class="controls">
                <span>
                  Use <strong>up</strong> &amp; <strong>down</strong> arrow keys
                  or
                </span>
                <div>
                  <button class="up">
                    <svg viewBox="0 0 24 24">
                      <path d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z"></path>
                    </svg>
                  </button>
                  <button class="down">
                    <svg viewBox="0 0 24 24">
                      <path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="start">
                <button>Start</button>
                <small>or press up/down key</small>
              </div>
            </div>
          </div>
        </div>
        <h1>Unsubscribe</h1>
        <p>We are sorry to see you go!</p>
        <div class="cta">
          <button class="confirm">Confirm</button>
        </div>
      </div>

      {/* <!-- dribbble - twitter --> */}
      <a class="dribbble" href="https://dribbble.com/ai" target="_blank">
        <img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""
        />
      </a>
      <a
        class="twitter"
        target="_blank"
        href="https://twitter.com/aaroniker_me"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
          viewBox="0 0 72 72"
        >
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
        </svg>
      </a>
    </>
  );
};

export default PingPingLeterGame;
