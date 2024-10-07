import React, { useEffect, useState } from "react";
import NavbarExpanded from "./NavbarExpanded";
import { proxy_data } from "../proxyData";
import NewsCard from "./NewsCard";

function Home() {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		proxy_data.slice(0, 12);
	}, []);

	return (
		<div className='flex h-full min-h-screen'>
			<div className={`${navbar ? "w-[90px]" : "w-[220px]"} hidden md:block transition-all duration-300 ease-in-out`}>
				<div
					className={`fixed ${navbar ? "w-[90px]" : "w-[220px]"} z-20 h-full transition-all duration-300 ease-in-out`}
				>
					<div className='sticky top-0 left-0 h-full px-4 flex flex-col py-3 bg-slate-900 overflow-y-auto'>
						<NavbarExpanded setNavbar={setNavbar} navbar={navbar} />
					</div>
				</div>
			</div>
			{/* <div className='grow h-auto py-1 pr-2 bg-slate-400'>
				<div className='w-full h-full rounded-t-md shadow-sm shadow-black bg-slate-100'>
					<div className='w-full h-full flex flex-col px-8'>
						<div className='z-20 flex h-16 shrink-0 justify-center border-b backdrop-blur-lg md:h-[70px] bg-transparent'>
							<div className='ease relative flex w-full items-center justify-between px-4 duration-150 md:px-8 max-w-[1100px]'>
								<h1 className='flex items-center gap-2 default font-display text-2xl md:text-3xl'>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fak'
										data-icon='discover'
										className='w-8'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 512'
										// style={{ width: "1.25em" }}
									>
										<path
											fill='currentColor'
											d='M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z'
										></path>
									</svg>
									Discover
								</h1>
							</div>
							<div className='mr-4 flex items-center md:hidden'>
								<button
									type='button'
									className='bg-amber-300 text-slate-700 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
									data-state='closed'
								>
									<div className='flex items-center min-w-0 justify-center gap-1'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='far'
											data-icon='sliders'
											className='w-4'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z'
											></path>
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className='h-auto w-full md:w-0 pt-2 grow pr-2 flex flex-col gap-1 place-content-center bg-green-500'>
				<div className='h-full flex-1 shadow-sm shadow-black bg-slate-100 rounded-t-md'>
					<div className='max-w-screen md:max-w-max mx-auto w-full h-full flex flex-col border-l-indigo-700'>
						<div className='z-20 flex h-16 shrink-0 justify-center border-b backdrop-blur-lg md:h-[70px] bg-transparent'>
							<div className='ease relative flex w-full items-center justify-between px-4 duration-150 md:px-8 max-w-[1100px]'>
								<h1 className='flex items-center gap-2 default font-display text-2xl md:text-3xl text-black'>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fak'
										data-icon='discover'
										className='w-8'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 512'
									>
										<path
											fill='currentColor'
											d='M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z'
										></path>
									</svg>
									Discover
								</h1>
							</div>
							<div className='mr-4 flex items-center md:hidden'>
								<button
									type='button'
									className='bg-amber-300 text-slate-700 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
									data-state='closed'
								>
									<div className='flex items-center min-w-0 justify-center gap-1'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='far'
											data-icon='sliders'
											className='w-4'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z'
											></path>
										</svg>
									</div>
								</button>
							</div>
						</div>
						<div className='w-full md:w-auto h-full mx-auto px-2 md:px-8 max-w-screen-md md:max-w-[1100px]'>
							<div className='h-full flex md:grid gap-12 mb-12 grid-cols-12'>
								<div className='w-full md:w-auto col-span-12 md:col-span-8'>
									<div className='flex flex-col md:grid gap-4 grid-cols-3'>
										<NewsCard />
										<div>
											<a
												className='block h-full outline-none'
												href='/page/ai-can-recognize-faces-in-obje-ExlxlkLFSYiXLWzJr.zJgw'
											>
												<div className='h-full rounded-lg duration-150 bg-[#f4f4ef] hover:opacity-95'>
													<div className='flex h-full flex-col items-center'>
														<div className='flex w-full shrink-0 overflow-hidden rounded-t-lg aspect-[3/2]'>
															<img
																alt=' AI Sees Faces in Objects, Too'
																className='h-full w-full object-cover transition-all ease-in-out'
																src='https://pplx-res.cloudinary.com/image/upload/t_thumbnail/v1728252855/server_uploads/fwikevz1lhccjdxsonuw.gif'
															/>
														</div>
														<div className='flex w-full grow transform-gpu flex-col p-4'>
															<div>
																<div className='flex items-center gap-x-4'>
																	<div className='grow font-sans text-base font-medium'>
																		<div data-testid='thread-title' className='leading-[1.4]'>
																			AI Sees Faces in Objects, Too
																		</div>
																	</div>
																</div>
																<div className='break-word mt-1 line-clamp-2 text-balance light font-sans text-sm'>
																	Recent research from MIT, awaiting peer review, reveals that artificial intelligence
																	can now recognize faces in inanimate objects, a phenomenon known as pareidolia,
																	opening new avenues for understanding both machine learning and human cognition. This
																	capability, while initially challenging for AI, has been significantly improved
																	through training on animal faces, suggesting intriguing links between evolutionary
																	survival skills and our tendency to see faces in everyday objects.
																</div>
															</div>
															<div className='flex-1'></div>
															<div className='flex items-center justify-between -mb-2 mt-1 bg-transparent'>
																<div className='flex w-full items-center justify-between'>
																	<div className='flex gap-1 text-xs'>
																		<div className='flex items-center gap-sm md:gap-0.5 max-w-[100px] light font-sans text-xs font-medium'>
																			<div className='origin-left md:scale-[.85]'>
																				<div className='flex aspect-square shrink-0 items-center justify-center rounded-full h-5 w-5'>
																					<img
																						alt='User avatar'
																						className='h-full w-full rounded-full object-cover'
																						src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail'
																					/>
																				</div>
																			</div>
																			<span className='truncate'>elymc</span>
																		</div>
																	</div>
																	<div className='flex items-center'>
																		<button
																			aria-label='Save to Bookmarks'
																			type='button'
																			className='-mr-2.5 hover:opacity-100 md:opacity-70 opacity-100 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
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
									</div>
								</div>
								<div className='hidden md:block md:col-span-4'></div>
							</div>
						</div>
						<div className='fixed bottom-4 right-4 m-2 hidden md:block'>
							<span>
								<button
									aria-label='Help menu'
									type='button'
									className='text-white bg-black focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans select-none relative justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8'
								>
									<div className='flex items-center min-w-0 justify-center gap-xs'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fas'
											data-icon='question'
											className='w-2'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 320 512'
										>
											<path
												fill='currentColor'
												d='M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z'
											></path>
										</svg>
									</div>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
