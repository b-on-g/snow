namespace $.$$ {
	$mol_style_define($bog_snow, {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		// pointerEvents: 'none',
		overflow: 'hidden',
		zIndex: 1,
	})
}

// CSS для анимации (глобальный стиль)
if (typeof document !== 'undefined') {
	const style = document.createElement('style')
	style.textContent = `
		@keyframes bog_snow_fall {
			0% {
				transform: translateY(-50px) translateX(0);
				opacity: 0;
			}
			10% {
				opacity: 1;
			}
			20% {
				transform: translateY(20vh) translateX(10px);
			}
			40% {
				transform: translateY(40vh) translateX(-10px);
			}
			60% {
				transform: translateY(60vh) translateX(10px);
			}
			80% {
				transform: translateY(80vh) translateX(-5px);
			}
			90% {
				opacity: 1;
			}
			100% {
				transform: translateY(100vh) translateX(0);
				opacity: 0;
			}
		}
	`
	document.head.appendChild(style)
}
