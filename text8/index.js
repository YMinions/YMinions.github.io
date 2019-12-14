

var stage = document.querySelector(".stage");
			var cards = stage.querySelectorAll(".items .card");
			document.body.onmousemove = function(event) {
				var x = event.clientX - stage.offsetLeft - stage.offsetWidth / 2;
				var y = event.clientY - stage.offsetTop - stage.offsetHeight / 2;
				console.log(x, y);

				// document.body.style.perspectiveOrigin = x / 5 + 50 + "% " + (y / 5 + 50) + "%";
				stage.style.transform = "rotateY(" + -x / 50 + "deg) rotateX(" + y / 50 + "deg)";

				// 遍历卡片
				cards.forEach(function(card, index) {
					card.style.backgroundPosition =
						-x / 100 +
						10 +
						"px " +
						(-y / 100 + 60) +
						"px, " +
						(x / 80 + -10) +
						"px " +
						(y / 80 + -10) +
						"px";
						if (index == 1) {
							card.style.backgroundPosition =
						-x / 100 +
						30 +
						"px " +
						(-y / 100 + 60) +
						"px, " +
						(x / 80 + -10) +
						"px " +
						(y / 80 + -10) +
						"px";
						}
				});
			};