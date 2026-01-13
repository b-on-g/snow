namespace $.$$ {
	export class $bog_snow extends $.$bog_snow {
		@$mol_mem
		snowflakes_created(next?: boolean): boolean {
			if (next !== undefined) return next
			return false
		}

		override render() {
			super.render()

			// Получаем DOM элемент владельца через dom_node_external
			const ownerEl = this.dom_node_external()

			// Проверяем что элемент существует и это HTMLElement
			if (!ownerEl || !(ownerEl instanceof HTMLElement)) return

			// Создаем контейнер для снежинок только один раз
			if (!this.snowflakes_created()) {
				// Создаем отдельный контейнер для снежинок
				const container = document.createElement('div')
				container.className = 'bog-snow-container'
				container.style.cssText = `
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					pointer-events: none;
					overflow: hidden;
					z-index: 9999;
				`

				// Создаем снежинки
				for (let i = 0; i < 40; i++) {
					const flake = document.createElement('div')
					flake.className = 'bog-snow-flake'

					// Случайные параметры
					const left = Math.random() * 100
					const duration = 5 + Math.random() * 10
					const delay = Math.random() * 5
					const size = 10 + Math.random() * 20
					const symbols = ['❄', '❅', '❆', '•']
					const symbol = symbols[Math.floor(Math.random() * symbols.length)]

					flake.textContent = symbol
					flake.style.cssText = `
						position: absolute;
						top: -50px;
						left: ${left}%;
						color: rgba(255, 255, 255, 0.8);
						font-size: ${size}px;
						text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
						user-select: none;
						pointer-events: none;
						animation: bog_snow_fall ${duration}s linear ${delay}s infinite;
					`

					container.appendChild(flake)
				}

				// Добавляем контейнер в body
				document.body.appendChild(container)
				this.snowflakes_created(true)
			}
		}
	}
}
