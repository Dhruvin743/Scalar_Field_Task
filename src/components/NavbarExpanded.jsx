import React from "react";

function NavbarExpanded({ setNavbar, navbar }) {
	return (
		<>
			<div className='mt-1 flex flex-col grow'>
				<div className='flex'>
					<div className={`${navbar ? "hidden" : "flex mb-4"} grow justify-between items-center`}>
						<span>
							<a aria-label='Perplexity' className='block ml-1 pt-1 pl-4 pr-2 ' href='/'>
								<div className='w-[140px] group'>
									<svg viewBox='0 0 400 91' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M196.978 27.8931H200.033V34.1872H196.079C192.979 34.1872 190.669 34.9333 189.14 36.4254C187.615 37.9176 186.85 40.3662 186.85 43.7711V64.401H180.606V28.0333H186.85V33.8367C186.85 34.1622 187.014 34.3274 187.337 34.3274C187.52 34.3274 187.659 34.2823 187.754 34.1872C187.848 34.0921 187.938 33.9068 188.032 33.6264C189.234 29.8058 192.219 27.8931 196.983 27.8931H196.978ZM237.763 35.6894C239.402 38.6036 240.227 42.1137 240.227 46.2146C240.227 50.3156 239.407 53.8257 237.763 56.7399C236.119 59.6541 233.993 61.8323 231.38 63.2794C228.767 64.7265 225.956 65.4476 222.951 65.4476C217.03 65.4476 212.868 63.0691 210.464 58.3122C210.28 57.9417 210.046 57.7514 209.768 57.7514C209.49 57.7514 209.351 57.8916 209.351 58.172V77.6853H203.107V28.0333H209.351V34.2573C209.351 34.5377 209.49 34.6779 209.768 34.6779C210.046 34.6779 210.275 34.4926 210.464 34.1171C212.868 29.3602 217.03 26.9817 222.951 26.9817C225.956 26.9817 228.767 27.7028 231.38 29.1499C233.993 30.597 236.119 32.7751 237.763 35.6894ZM233.983 46.2146C233.983 41.9234 232.841 38.5786 230.551 36.1801C228.261 33.7816 225.246 32.5799 221.496 32.5799C217.745 32.5799 214.73 33.7816 212.44 36.1801C210.151 38.5836 209.311 41.9284 209.311 46.2146C209.311 50.5009 210.151 53.8507 212.44 56.2492C214.73 58.6527 217.75 59.8494 221.496 59.8494C225.241 59.8494 228.261 58.6477 230.551 56.2492C232.841 53.8507 233.983 50.5009 233.983 46.2146ZM134.595 35.7445C136.235 38.6587 137.059 42.1688 137.059 46.2697C137.059 50.3707 136.24 53.8808 134.595 56.795C132.951 59.7092 130.825 61.8874 128.213 63.3345C125.6 64.7816 122.788 65.5026 119.783 65.5026C113.863 65.5026 109.7 63.1242 107.296 58.3673C107.112 57.9967 106.879 57.8065 106.601 57.8065C106.322 57.8065 106.183 57.9467 106.183 58.2271V77.7404H99.9446V28.0883H106.188V34.3124C106.188 34.5928 106.327 34.733 106.606 34.733C106.884 34.733 107.112 34.5477 107.301 34.1722C109.705 29.4153 113.867 27.0368 119.788 27.0368C122.793 27.0368 125.605 27.7579 128.218 29.205C130.83 30.6521 132.956 32.8302 134.6 35.7445H134.595ZM130.815 46.2697C130.815 41.9785 129.673 38.6336 127.383 36.2352C125.093 33.8367 122.078 32.6349 118.328 32.6349C114.578 32.6349 111.563 33.8367 109.273 36.2352C106.983 38.6387 106.144 41.9835 106.144 46.2697C106.144 50.5559 106.983 53.9058 109.273 56.3043C111.563 58.7078 114.578 59.9045 118.328 59.9045C122.078 59.9045 125.093 58.7028 127.383 56.3043C129.673 53.9058 130.815 50.5559 130.815 46.2697ZM169.112 52.8543H175.703C174.824 56.2592 173.031 59.2085 170.329 61.7021C167.622 64.1957 163.748 65.4425 158.706 65.4425C154.911 65.4425 151.573 64.6614 148.682 63.0991C145.791 61.5369 143.561 59.3137 141.986 56.4195C140.412 53.5303 139.627 50.1253 139.627 46.2096C139.627 42.294 140.392 38.889 141.917 35.9998C143.442 33.1106 145.583 30.8824 148.335 29.3201C151.086 27.7579 154.31 26.9767 158.011 26.9767C161.711 26.9767 164.776 27.7479 167.344 29.2851C169.912 30.8223 171.829 32.8653 173.101 35.404C174.372 37.9477 175.008 40.7317 175.008 43.7611V47.9572H146.219C146.447 51.5925 147.664 54.4867 149.859 56.6298C152.055 58.7729 155.005 59.8494 158.706 59.8494C161.711 59.8494 164.016 59.2335 165.61 57.9967C167.205 56.7599 168.372 55.0475 169.112 52.8543ZM146.288 42.7146H168.074C168.074 39.545 167.264 37.0614 165.645 35.2638C164.026 33.4712 161.483 32.5699 158.015 32.5699C154.777 32.5699 152.129 33.4461 150.073 35.1937C148.017 36.9412 146.755 39.4498 146.293 42.7096L146.288 42.7146ZM245.169 64.396H251.413V14.043H245.169V64.401V64.396ZM331.801 24.0625H339.093V16.1911H331.801V24.0625ZM357.526 58.9782C356.393 59.0933 355.708 59.1534 355.479 59.1534C355.156 59.1534 354.898 59.0583 354.714 58.873C354.531 58.6877 354.436 58.4324 354.436 58.1019C354.436 57.8716 354.496 57.1806 354.61 56.0389C354.724 54.8972 354.784 53.1347 354.784 50.7612V33.361H363.69L361.937 28.0333H354.789V18.2391H348.545V28.0283H341.755V33.356H348.545V52.5038C348.545 56.5146 349.519 59.4989 351.461 61.4568C353.403 63.4146 356.363 64.396 360.342 64.396H365.2V58.8029H362.771C360.412 58.8029 358.663 58.863 357.531 58.9782H357.526ZM394.059 28.0283L383.723 58.5425C383.583 58.9181 383.365 59.4088 382.655 59.4088C381.944 59.4088 381.726 58.9181 381.587 58.5425L371.25 28.0283H364.882L376.853 64.396H381.085C381.363 64.396 381.572 64.4211 381.711 64.4661C381.85 64.5112 381.964 64.6264 382.059 64.8166C382.242 65.097 382.217 65.5177 381.989 66.0735L380.047 71.3862C379.769 72.0872 379.237 72.4377 378.452 72.4377C378.174 72.4377 377.529 72.3776 376.51 72.2624C375.492 72.1473 374.176 72.0872 372.556 72.0872H367.49V77.6803H374.151C378.035 77.6803 380.375 77.0143 382.386 75.6874C384.398 74.3605 385.958 72.0171 387.07 68.6572L400 29.4203V28.0233H394.059V28.0283ZM311.406 41.5979L301.626 28.0283H294.756V29.4253L306.478 45.1631L292.188 62.999V64.396H299.197L310.576 49.7798L321.191 64.396H327.922V62.999L315.504 46.2146L328.965 29.5004V28.0333H321.956L311.411 41.603L311.406 41.5979ZM332.467 64.396H338.71V28.0333H332.467V64.401V64.396ZM292.471 52.8543C291.592 56.2592 289.799 59.2085 287.097 61.7021C284.39 64.1957 280.515 65.4425 275.474 65.4425C271.679 65.4425 268.341 64.6614 265.45 63.0991C262.559 61.5369 260.329 59.3137 258.754 56.4195C257.18 53.5303 256.395 50.1253 256.395 46.2096C256.395 42.294 257.16 38.889 258.685 35.9998C260.21 33.1106 262.35 30.8824 265.102 29.3201C267.854 27.7579 271.078 26.9767 274.778 26.9767C278.479 26.9767 281.543 27.7479 284.111 29.2851C286.679 30.8223 288.597 32.8653 289.868 35.404C291.14 37.9477 291.776 40.7317 291.776 43.7611V47.9572H262.986C263.215 51.5925 264.432 54.4867 266.627 56.6298C268.823 58.7729 271.773 59.8494 275.474 59.8494C278.479 59.8494 280.783 59.2335 282.378 57.9967C283.972 56.7599 285.14 55.0475 285.88 52.8543H292.471ZM263.056 42.7146H284.842C284.842 39.545 284.032 37.0614 282.413 35.2638C280.793 33.4712 278.25 32.5699 274.783 32.5699C271.545 32.5699 268.897 33.4461 266.841 35.1937C264.784 36.9412 263.523 39.4498 263.061 42.7096L263.056 42.7146Z'
											className=' block fill-textMain group-hover:fill-superDark dark:fill-textMainDark transition-colors duration-300'
										></path>
										<path
											d='M38.6936 29.9832L12.8633 5.88983V29.9832H38.6936Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark duration-300 transition-all'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M39.5005 29.9832L65.3308 5.88983V29.9832H39.5005Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M38.7227 2L38.7227 90.2534'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M64.5246 53.7584L38.6943 30.0068V62.9404L64.5246 85.9724V53.7584Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M12.8924 53.7584L38.7227 30.0068V62.9404L12.8924 85.9724V53.7584Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M2.28711 29.9832V64.4236H12.8863V53.7348L38.7226 29.9832H2.28711Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
										<path
											d='M38.6943 30.3L64.5246 54.0515V64.7403H75.2872V30.3L38.6943 30.3Z'
											className='stroke-super dark:stroke-superDark group-hover:stroke-superDark transition-all duration-300'
											strokeWidth='4.30504'
											strokeMiterlimit='10'
										></path>
									</svg>
								</div>
							</a>
						</span>
						<button
							type='button'
							className='h-8 aspect-square mr-1 rounded-full md:hover:bg-offsetPlus md:hover:text-textMain text-textOff dark:text-textOffDark dark:md:hover:text-textMainDark dark:md:hover:bg-offsetPlusDark transition-colors duration-300 select-none flex justify-center items-center text-sm'
							onClick={() => {
								setNavbar(!navbar);
							}}
						>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='far'
								data-icon='arrow-left-to-line'
								className='w-[1.25em] h-[1em]'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path
									fill='currentColor'
									d='M0 424c0 13.3 10.7 24 24 24s24-10.7 24-24L48 88c0-13.3-10.7-24-24-24S0 74.7 0 88L0 424zM135.6 238.5c-4.8 4.5-7.6 10.9-7.6 17.5s2.7 12.9 7.6 17.5l136 128c9.7 9.1 24.8 8.6 33.9-1s8.6-24.8-1-33.9L212.5 280l83.5 0 128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-128 0-83.5 0 91.9-86.5c9.7-9.1 10.1-24.3 1-33.9s-24.3-10.1-33.9-1l-136 128z'
								></path>
							</svg>
						</button>
					</div>
					<div className={`${navbar ? "flex" : "hidden"} grow justify-center items-center`}>
						<span className='w-10'>
							<svg viewBox='0 0 101 116' stroke='none' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									d='M86.4325 6.53418L50.4634 36.9696H86.4325V6.53418Z'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M50.4625 36.9696L17.2603 6.53418V36.9696H50.4625Z'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M50.4634 1L50.4634 114.441'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M83.6656 70.172L50.4634 36.9697V79.3026L83.6656 108.908V70.172Z'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M17.2603 70.172L50.4625 36.9697V78.4497L17.2603 108.908V70.172Z'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M3.42627 36.9697V81.2394H17.2605V70.172L50.4628 36.9697H3.42627Z'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
								<path
									d='M50.4634 36.9697L83.6656 70.172V81.2394H97.4999V36.9697L50.4634 36.9697Z'
									class='stroke-textMain dark:stroke-textMainDark group-hover:stroke-superDuper transition-colors duration-300'
									stroke-width='5.53371'
									stroke-miterlimit='10'
								></path>
							</svg>
						</span>
					</div>
				</div>
				<div className={`flex ${navbar ? "-mb-2 py-8" : "mb-4 ml-1 pt-2 pb-1"}`}>
					<button
						type='button'
						className={`w-full h-full ${
							navbar ? "hidden" : "flex"
						} justify-between items-center mx-4 pl-4 pr-2 py-2 rounded-full text-textOff dark:text-textOffDark select-none text-sm bg-background dark:bg-backgroundDark border border-borderMain/50 dark:border-borderMainDark/50 ring-1 ring-borderMain/50 dark:ring-borderMainDark/50 hover:ring-super dark:hover:ring-superDark transition duration-200`}
					>
						<div className='line-clamp-1 font-medium'>New Thread</div>
						<div className='h-5 text-xs space-x-[2px] flex items-center font-code'>
							<div className='border border-borderMain/50 dark:border-borderMainDark/50 rounded h-5 px-1'>Ctrl</div>
							<div className='border border-borderMain/50 dark:border-borderMainDark/50 rounded h-5 w-5'>I</div>
						</div>
					</button>
					<div className={`${navbar ? "flex" : "hidden"} grow justify-center items-center`}>
						<button
							type='button'
							className='aspect-square h-10 flex justify-center items-center rounded-full text-textMain dark:text-textMainDark select-none text-xl bg-offsetPlus dark:bg-offsetPlusDark md:hover:text-textOff dark:md:hover:text-textOffDark transition duration-200'
						>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='far'
								data-icon='plus'
								class='w-[1.25em] h-[1em]'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 448 512'
							>
								<path
									fill='currentColor'
									d='M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z'
								></path>
							</svg>
						</button>
					</div>
				</div>
				<div className='flex'>
					<div className={`${navbar ? "hidden" : "flex"} flex-col grow px-1 space-y-1 font-medium`}>
						<div className='h-10 relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='nav' id='btn1' value={"btn1"} className='peer appearance-none absolute' />
							<label
								htmlFor='btn1'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z'
									></path>
								</svg>
								<span>Home</span>
							</label>
						</div>
						<div className='h-10 relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input
								type='radio'
								name='nav'
								id='btn2'
								value={"btn2"}
								defaultChecked={true}
								className='peer appearance-none absolute'
							/>
							<label
								htmlFor='btn2'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fak'
									data-icon='discover'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 512'
								>
									<path
										fill='currentColor'
										d='M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z'
									></path>
								</svg>
								<span>Discover</span>
							</label>
						</div>
						<div className='h-10 relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='nav' id='btn3' value={"btn3"} className='peer appearance-none absolute' />
							<label
								htmlFor='btn3'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fak'
									data-icon='library'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z'
									></path>
								</svg>
								<span>Library</span>
							</label>
						</div>
						<div className='h-10 relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='nav' id='btn4' value={"btn4"} className='peer appearance-none absolute' />
							<label
								htmlFor='btn4'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='far'
									data-icon='right-to-bracket'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z'
									></path>
								</svg>
								<span>Sign in</span>
							</label>
						</div>
					</div>
					<div className={`${navbar ? "flex" : "hidden"} grow flex-col text-xl text-center items-center space-y-1`}>
						<div className='w-full h-10 flex justify-center relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='newnav' id='nbtn1' value={"nbtn1"} className='peer appearance-none absolute' />
							<label
								htmlFor='nbtn1'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z'
									></path>
								</svg>
							</label>
							<div class='absolute right-0 h-full w-[3px] rounded-l-sm bg-textMain dark:bg-textMainDark'></div>
						</div>
						<div className='w-full h-10 flex justify-center relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input
								type='radio'
								name='newnav'
								id='nbtn2'
								value={"nbtn2"}
								defaultChecked={true}
								className='peer appearance-none absolute'
							/>
							<label
								htmlFor='nbtn2'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fak'
									data-icon='discover'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 512'
								>
									<path
										fill='currentColor'
										d='M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z'
									></path>
								</svg>
							</label>
						</div>
						<div className='w-full h-10 flex justify-center relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='newnav' id='nbtn3' value={"nbtn3"} className='peer appearance-none absolute' />
							<label
								htmlFor='nbtn3'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fak'
									data-icon='library'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z'
									></path>
								</svg>
							</label>
						</div>
						<div className='w-full h-10 flex justify-center relative text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus md:hover:dark:bg-offsetPlusDark duration-300'>
							<input type='radio' name='newnav' id='nbtn4' value={"nbtn4"} className='peer appearance-none absolute' />
							<label
								htmlFor='nbtn4'
								className='flex h-full p-4 items-center justify-start gap-1 peer-checked:text-textMain peer-checked:dark:text-textMainDark cursor-pointer'
							>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='far'
									data-icon='right-to-bracket'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<path
										fill='currentColor'
										d='M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z'
									></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				<div className={`${navbar ? "hidden" : "block"} w-full mt-4 px-4`}>
					<button
						type='button'
						className='w-full p-2 rounded-full appearance-none active:scale-95 bg-super dark:bg-superDark font-medium hover:opacity-80 text-white dark:text-backgroundDark duration-300'
					>
						Sign Up
					</button>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='px-4 hidden flex-col'>
					<div>Try pro</div>
					<div>Upgrade for image upload, smarter AI, and more Pro Search.</div>
					<div>
						<button type='button' className='bg-slate-300 p-2'>
							Learn more
						</button>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<div className={`${navbar ? "hidden" : "block"} w-full h-14 content-center`}>
						<div className='mb-2 px-1 pt-2 border-t border-t-borderMain/50 dark:border-t-borderMainDark/50 flex justify-between'>
							<button
								type='button'
								className='rounded-full md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark group px-2'
							>
								<div className='flex gap-1 items-center font-medium text-textOff dark:text-textOffDark group-hover:text-textMain group-hover:dark:text-textMainDark select-none text-sm'>
									<svg
										focusable='false'
										className='w-[1.25em] h-[1em]'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 384 512'
									>
										<path
											fill='currentColor'
											d='M64 448c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16V368H64v80zm0-128H320V64c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16V320zM16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM160 400h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z'
										></path>
									</svg>
									<div className=''>Download</div>
								</div>
							</button>
							<div className='flex gap-[2px] items-center'>
								<a
									className='text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark transition duration-300 ease-in-out font-sans select-none justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
									target='_blank'
									href='https://twitter.com/perplexity_ai'
								>
									<svg
										focusable='false'
										className='w-[1.25em] h-[1em]'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path
											fill='currentColor'
											d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
										></path>
									</svg>
								</a>
								<a
									className='text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark transition duration-300 ease-in-out font-sans select-none justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
									target='_blank'
									href='https://discord.gg/perplexity-ai'
								>
									<svg
										aria-hidden='true'
										focusable='false'
										className='w-[1.25em] h-[1em]'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 512'
									>
										<path
											fill='currentColor'
											d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className={`${navbar ? "flex" : "hidden"} px-4 items-center justify-center pb-4`}>
						<button
							type='button'
							className='bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark md:hover:text-textOff md:dark:hover:text-textOffDark focus:outline-none outline-none transition duration-300 ease-in-out select-none justify-center items-center rounded-full active:scale-95 origin-center whitespace-nowrap inline-flex text-xl aspect-square h-10'
							onClick={() => {
								setNavbar(!navbar);
							}}
						>
							<div className='flex items-center min-w-0 justify-center gap-xs'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='far'
									data-icon='arrow-right-from-line'
									className='w-[1.25em] h-[1em]'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
								>
									<path
										fill='currentColor'
										d='M48 88c0-13.3-10.7-24-24-24S0 74.7 0 88V424c0 13.3 10.7 24 24 24s24-10.7 24-24L48 88zM440.4 273.5c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-12.9-7.6-17.5l-136-128c-9.7-9.1-24.8-8.6-33.9 1s-8.6 24.8 1 33.9L363.5 232H280l-128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l128 0h83.5l-91.9 86.5c-9.7 9.1-10.1 24.3-1 33.9s24.3 10.1 33.9 1l136-128z'
									></path>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavbarExpanded;
