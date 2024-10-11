import React from "react";

function NewsCard({
	bigCard = true,
	IMG_URL,
	IMG_ALT = "img alt",
	DESCRIPTION = "description",
	AUTHOR_IMG,
	AUTHOR_NAME = "author",
}) {
	return (
		<div className={`${bigCard ? "col-span-3" : "col-span-1"}`}>
			<a className='block h-full outline-none' href='/page/china-has-the-most-powerful-la-18f6BgzXSUyzWSmGigD6CA'>
				<div className='h-full rounded-lg duration-150 hover:opacity-90 bg-offset dark:bg-offsetDark md:hover:-translate-y-px'>
					<div className=' flex h-full flex-col items-center'>
						<div
							className={`flex w-full shrink-0 overflow-hidden rounded-t-lg ${
								bigCard ? "md:aspect-[1036/350]" : "md:aspect-[3/2]"
							} aspect-[4/3]`}
						>
							<img alt={IMG_ALT} className='h-full w-full object-cover transition-all ease-in-out' src={IMG_URL} />
						</div>
						<div className='flex h-auto w-full grow transform-gpu flex-col p-4'>
							<div>
								<div className='flex items-center gap-x-2'>
									<div
										className={`grow font-display ${
											bigCard ? "text-lg" : "text-base"
										} font-medium text-textMain dark:text-textMainDark selection:text-textMain selection:bg-super/50 dark:selection:text-superDark dark:selection:bg-superDuper/10`}
									>
										<div data-testid='thread-title' className='leading-[1.4]'>
											{IMG_ALT}
										</div>
									</div>
								</div>
								<div
									className={`break-word mt-2 line-clamp-2 text-balance font-sans ${
										bigCard ? "text-base" : "text-sm"
									} text-black/60 dark:text-white/50 selection:text-textMain selection:bg-super/50 dark:selection:text-superDark dark:selection:bg-superDuper/10`}
								>
									{DESCRIPTION}
								</div>
							</div>
							<div className='flex-1'></div>
							<div className='flex items-center justify-between -mb-2 mt-1 bg-transparent'>
								<div className='flex w-full items-center justify-between'>
									<div className='flex items-center gap-2 max-w-[120px] md:gap-1 font-sans text-textOff dark:text-textOffDark selection:text-textMain dark:selection:text-superDark selection:bg-super/50 dark:selection:bg-superDuper/10 text-xs font-medium'>
										<div className='origin-left md:scale-[.85]'>
											<div className='flex aspect-square shrink-0 items-center justify-center rounded-full h-5 w-5'>
												<img alt='User avatar' className='h-full w-full rounded-full object-cover' src={AUTHOR_IMG} />
											</div>
										</div>
										<span className='truncate'>{AUTHOR_NAME}</span>
									</div>
									<div className='flex items-center'>
										<button
											aria-label='Save to Bookmarks'
											type='button'
											className='-mr-2.5 hover:opacity-100 md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:text-textMainDark md:opacity-70 opacity-100 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
											data-state='closed'
										>
											<div className='flex items-center min-w-0 justify-center gap-1'>
												<svg
													aria-hidden='true'
													focusable='false'
													data-prefix='far'
													data-icon='bookmark'
													className='w-[1.25em] h-[1em]'
													role='img'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 384 512'
												>
													<path
														fill='currentColor'
														d='M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'
													></path>
												</svg>
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default NewsCard;
