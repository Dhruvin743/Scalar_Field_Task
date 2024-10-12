import React, { useEffect, useRef, useState } from "react";
import NavbarExpanded from "./NavbarExpanded";
import { proxy_data } from "../proxyData";
import NewsCard from "./NewsCard";
import "../App.css";

function Home() {
	const [navbar, setNavbar] = useState(false);
	const [expand, setExpand] = useState(false);
	const spanTag = useRef();
	let spanBtnTag = useRef(null);
	const categoryDiv = useRef();
	const leftArrow = useRef(null);
	const rightArrow = useRef(null);

	useEffect(() => {
		checkArrow();
	}, []);

	function checkArrow() {
		const scrollLeft = categoryDiv.current.scrollLeft;
		const maxscrollLeft = categoryDiv.current.scrollWidth - categoryDiv.current.clientWidth;

		if (scrollLeft < 1) {
			leftArrow.current.classList.add("md:hidden");
			leftArrow.current.classList.remove("md:block");
		} else {
			leftArrow.current.classList.remove("md:hidden");
			leftArrow.current.classList.add("md:block");
		}

		if (scrollLeft >= maxscrollLeft - 10) {
			rightArrow.current.classList.add("md:hidden");
			rightArrow.current.classList.remove("md:block");
		} else {
			rightArrow.current.classList.remove("md:hidden");
			rightArrow.current.classList.add("md:block");
		}
	}

	function btnClickHandle(e) {
		console.log(spanBtnTag.current === e.currentTarget);
		if (spanBtnTag.current !== e.currentTarget) {
			spanBtnTag.current.classList.add("hover:opacity-50");
			spanBtnTag.current.classList.remove("text-super", "dark:text-superDark");
			e.currentTarget.classList.remove("hover:opacity-50");
			e.currentTarget.classList.add("text-super", "dark:text-superDark");
			e.currentTarget.parentElement.appendChild(spanTag.current);
			spanBtnTag.current = e.currentTarget;
		}
		return;
	}

	return (
		<div className='flex w-full max-w-full h-full min-h-screen bg-offset dark:bg-offsetDark'>
			<div
				className={`${
					navbar ? "w-[90px]" : "w-[220px]"
				} hidden md:block shrink-0 transition-all duration-300 ease-in-out`}
			>
				<div
					className={`fixed ${navbar ? "w-[90px]" : "w-[220px]"} z-20 h-full transition-all duration-300 ease-in-out`}
				>
					<div
						className='sticky top-0 left-0 h-full pb-2 flex flex-col pt-3 overflow-y-auto custom-scrollbar'
						// style={{ scrollbarWidth: "thin", scrollbarColor: "#e0e0dc transparent" }}
					>
						<NavbarExpanded setNavbar={setNavbar} navbar={navbar} />
					</div>
				</div>
			</div>
			<div className='w-full grow h-auto lg:p-2 lg:pl-0 flex'>
				<div className='h-full w-full relative bg-background dark:bg-backgroundDark md:border md:border-borderMain/50 md:dark:border-borderMainDark/50 md:rounded-t-md'>
					<div className='w-full h-full flex flex-col items-center justify-center'>
						<div className='w-full flex h-16 md:h-[70px] shrink-0 justify-center border-b border-b-borderMain/50 dark:border-b-borderMainDark/50 bg-transparent'>
							<div
								className={`flex w-full items-center justify-between px-4 duration-150 md:px-8 ${
									expand ? "md:max-w-screen-md" : "md:max-w-threadWidth"
								}`}
							>
								<h1 className='flex h-max items-center gap-2 font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark'>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='fak'
										data-icon='discover'
										className='w-[1.25em] h-[1em] origin-center scale-[.9]'
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
									className='bg-offsetPlus dark:bg-offsetPlusDark  text-textMain dark:text-textMainDark md:hover:text-textOff dark:md:hover:text-textOffDark focus:outline-none outline-none transition duration-300 ease-in-out select-none justify-center items-center rounded-full active:scale-95 origin-center flex text-sm aspect-square h-8'
									data-state='closed'
								>
									<svg
										aria-hidden='true'
										focusable='false'
										data-prefix='far'
										data-icon='sliders'
										className='w-[1.25em] h-[1em]'
										role='img'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path
											fill='currentColor'
											d='M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z'
										></path>
									</svg>
								</button>
							</div>
						</div>
						<div
							className={`w-full ${expand ? "md:max-w-screen-md" : "md:max-w-threadWidth"} h-full mx-auto px-4 md:px-8`}
						>
							<div className='h-full grow flex md:grid gap-12 mb-12 grid-cols-12'>
								<div className={`w-full col-span-12 ${expand ? "" : "md:col-span-8"}`}>
									<div
										className={`sticky w-full top-0 h-16 z-20 flex items-center justify-between gap-4 backdrop-blur-lg bg-transparent `}
									>
										<div className='relative py-2 flex flex-1 items-center justify-between gap-4 z-[2] bg-transparent overflow-x-auto'>
											<button
												ref={leftArrow}
												type='button'
												className='shadow-sm hidden left-0 z-30 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out select-none absolute rounded-full cursor-point active:scale-95 bg-background dark:bg-backgroundDark text-textOff dark:text-textOffDark border border-borderMain/50 dark:border-borderMainDark/50 md:hover:text-textMain md:hover:dark:text-textMainDark text-sm aspect-square h-8'
												onClick={() => {
													categoryDiv.current.scrollBy({ left: -250, behavior: "smooth" });
													// checkArrow();
												}}
											>
												<div className='flex items-center min-w-0 justify-center aspect-square'>
													<svg
														aria-hidden='true'
														focusable='false'
														data-prefix='far'
														data-icon='arrow-right'
														className='w-[1.25em] h-[1em]'
														role='img'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 448 512'
													>
														<path
															fill='currentColor'
															d='M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z'
														></path>
													</svg>
												</div>
											</button>
											<button
												ref={rightArrow}
												type='button'
												className='shadow-sm hidden right-0 z-30 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out select-none absolute rounded-full cursor-point active:scale-95 bg-background dark:bg-backgroundDark text-textOff dark:text-textOffDark border border-borderMain/50 dark:border-borderMainDark/50 md:hover:text-textMain md:hover:dark:text-textMainDark text-sm aspect-square h-8'
												onClick={() => {
													categoryDiv.current.scrollBy({ left: 250, behavior: "smooth" });
													// checkArrow();
												}}
											>
												<div className='flex items-center min-w-0 justify-center aspect-square'>
													<svg
														aria-hidden='true'
														focusable='false'
														data-prefix='far'
														data-icon='arrow-right'
														className='w-[1.25em] h-[1em]'
														role='img'
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 448 512'
													>
														<path
															fill='currentColor'
															d='M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z'
														></path>
													</svg>
												</div>
											</button>
											<div
												ref={categoryDiv}
												className='relative w-full z-0 -mx-4 flex min-w-0 snap-x snap-mandatory overflow-x-scroll text-textMain dark:text-textMainDark duration-1000 md:mx-0'
												style={{
													scrollbarWidth: "none",
													// maskImage: "linear-gradient(to left, transparent 0%, black 10%)",
												}}
												onScroll={checkArrow}
											>
												<div className='w-4 shrink-0 snap-start md:hidden'></div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none text-super dark:text-superDark items-center justify-center duration-300 gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
														ref={spanBtnTag}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='star'
															className='w-[.875em] h-[1em] delay-200'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 576 512'
														>
															<path
																fill='currentColor'
																d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Top</div>
													</button>
													<span
														className={`absolute inset-x-0 inset-y-1 z-[1] rounded-md bg-superDark/20`}
														ref={spanTag}
														style={{
															transform: "none",
															opacity: 1,
															transformOrigin: "50% 50% 0px",
															translate: "",
															transition: "all, .5s, linear, 0s",
														}}
													></span>
												</div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none items-center hover:opacity-50 duration-300 justify-center gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='microchip-ai'
															className='w-[.875em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 512 512'
														>
															<path
																fill='currentColor'
																d='M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V184h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM112 128c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16V384c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128zm224 44c-11 0-20 9-20 20V320c0 11 9 20 20 20s20-9 20-20V192c0-11-9-20-20-20zM234.3 184c-3.2-7.3-10.4-12-18.3-12s-15.1 4.7-18.3 12l-56 128c-4.4 10.1 .2 21.9 10.3 26.3s21.9-.2 26.3-10.3l5.3-12h64.8l5.3 12c4.4 10.1 16.2 14.7 26.3 10.3s14.7-16.2 10.3-26.3l-56-128zM216 241.9L230.9 276H201.1L216 241.9z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Tech &amp; Science</div>
													</button>
												</div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none items-center hover:opacity-50 duration-300 justify-center gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='circle-dollar'
															className='w-[.875em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 512 512'
														>
															<path
																fill='currentColor'
																d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM276.8 133.6v14.2c9.7 1.2 19.4 3.9 29 6.6c1.9 .5 3.7 1 5.6 1.6c11.5 3.2 18.3 15.1 15.1 26.6s-15.1 18.2-26.6 15.1c-1.6-.4-3.1-.9-4.7-1.3c-7-2-14-3.9-21.1-5.3c-13.2-2.5-28.5-1.3-40.8 4c-11 4.8-20.1 16.4-7.6 24.4c9.8 6.3 21.8 9.5 33.2 12.6c2.4 .6 4.7 1.3 7 1.9c15.6 4.4 35.5 10.1 50.4 20.3c19.4 13.3 28.5 34.9 24.2 58.1c-4.1 22.4-19.7 37.1-38.4 44.7c-7.8 3.2-16.3 5.2-25.2 6.2l0 15.2c0 11.9-9.7 21.6-21.6 21.6s-21.6-9.7-21.6-21.6l0-17.4c-14.5-3.3-28.7-7.9-42.8-12.5c-11.3-3.7-17.5-16-13.7-27.3s16-17.5 27.3-13.7c2.5 .8 5 1.7 7.5 2.5c11.3 3.8 22.9 7.7 34.5 9.6c17 2.5 30.6 1 39.5-2.6c12-4.8 17.7-19.1 5.9-27.1c-10.1-6.9-22.6-10.3-34.5-13.5c-2.3-.6-4.5-1.2-6.8-1.9c-15.1-4.3-34-9.6-48.2-18.7c-19.5-12.5-29.4-33.3-25.2-56.4c4-21.8 21-36.3 39-44.1c5.5-2.4 11.4-4.3 17.5-5.7V133.6c0-11.9 9.7-21.6 21.6-21.6s21.6 9.7 21.6 21.6z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Finance</div>
													</button>
												</div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none items-center hover:opacity-50 duration-300 justify-center gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='palette'
															className='w-[.875em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 512 512'
														>
															<path
																fill='currentColor'
																d='M464 258.2c0 2.7-1 5.2-4.2 8c-3.8 3.1-10.1 5.8-17.8 5.8H344c-53 0-96 43-96 96c0 6.8 .7 13.4 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6l0 0c.7 1.6 1.4 3 1.9 4.3c5 11.5 5.6 15.4 5.6 17.1c0 5.3-1.9 9.5-3.8 11.8c-.9 1.1-1.6 1.6-2 1.8c-.3 .2-.8 .3-1.6 .4c-2.9 .1-5.7 .2-8.6 .2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 .7 0 1.4 0 2.2zm48 .5c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48h97.9c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Arts &amp; Culture</div>
													</button>
												</div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none items-center hover:opacity-50 duration-300 justify-center gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='medal'
															className='w-[.875em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 512 512'
														>
															<path
																fill='currentColor'
																d='M4.1 38.2L106.4 191.5c11.2-11.6 23.7-21.9 37.3-30.6L68.4 48h64.5l54.9 91.5c15.8-5.5 32.4-9.1 49.6-10.6l-6.1-10.1L169.3 15.5C163.5 5.9 153.1 0 141.9 0H24.6C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6zm276.6 80.5l-6.1 10.1c17.2 1.5 33.8 5.2 49.6 10.6L379.2 48h64.5L368.4 160.9c13.6 8.7 26.1 19 37.3 30.6L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0H370.1c-11.2 0-21.7 5.9-27.4 15.5L280.8 118.7zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-257.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L180.7 304c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L252.3 386c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L302.4 355c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4l-19.2-38.9z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Sports</div>
													</button>
												</div>
												<div className='relative isolate flex min-w-16 shrink-0 select-none snap-start items-center justify-center'>
													<button
														className='z-[2] flex h-full appearance-none items-center hover:opacity-50 duration-300 justify-center gap-1.5 p-4 outline-none active:scale-[0.95]'
														onClick={btnClickHandle}
													>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='tv'
															className='w-[.875em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 640 512'
														>
															<path
																fill='currentColor'
																d='M64 48c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16H576c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM120 464H520c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z'
															></path>
														</svg>
														<div className='whitespace-nowrap font-sans text-xs font-medium'>Entertainment</div>
													</button>
												</div>
												<div className='w-4 shrink-0 snap-start md:hidden'></div>
											</div>
										</div>
										<div
											className={`h-full py-2 hidden ${
												expand ? "md:flex" : "md:hidden"
											} items-center justify-center z-[2]`}
										>
											<button
												type='button'
												className='flex justify-center items-center rounded-full text-textMain dark:text-textMainDark select-none outline-none focus:outline-none hover:text-textOff dark:hover:text-textOffDark bg-offsetPlus dark:bg-offsetPlusDark text-sm aspect-square h-8 transition duration-300 ease-in-out'
											>
												<svg
													aria-hidden='true'
													focusable='false'
													data-prefix='far'
													data-icon='sliders'
													className='w-[1.25em] h-[1em]'
													role='img'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 512 512'
												>
													<path
														fill='currentColor'
														d='M0 416c0 13.3 10.7 24 24 24l59.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 440c13.3 0 24-10.7 24-24s-10.7-24-24-24l-251.7 0c-10.2-32.5-40.5-56-76.3-56s-66.1 23.5-76.3 56L24 392c-13.3 0-24 10.7-24 24zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-35.8 0-66.1 23.5-76.3 56L24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l251.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56l59.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-59.7 0c-10.2-32.5-40.5-56-76.3-56zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm76.3-56C258.1 39.5 227.8 16 192 16s-66.1 23.5-76.3 56L24 72C10.7 72 0 82.7 0 96s10.7 24 24 24l91.7 0c10.2 32.5 40.5 56 76.3 56s66.1-23.5 76.3-56L488 120c13.3 0 24-10.7 24-24s-10.7-24-24-24L268.3 72z'
													></path>
												</svg>
											</button>
										</div>
										<div className='absolute -inset-x-0 inset-y-0 -translate-y-1 bg-background dark:bg-backgroundDark opacity-90 z-[1]'></div>
									</div>
									<div className='grow flex flex-col md:grid gap-4 grid-cols-3'>
										{proxy_data.slice(0, 16).map((v, i) => {
											return (
												<NewsCard
													key={v.uuid}
													bigCard={i % 4 === 0}
													IMG_URL={v.featured_images[0].image.trim()}
													IMG_ALT={v.title}
													DESCRIPTION={v.description}
													AUTHOR_IMG={v.author_image}
													AUTHOR_NAME={v.author_username}
												/>
											);
										})}
									</div>
								</div>
								<div className={`hidden ${expand ? "hidden" : "md:block md:col-span-4"}`}>
									<div className='h-full flex flex-col'>
										<div className='h-16 mt-1'></div>
										<div className='sticky top-8 flex flex-col p-4 gap-4 rounded-lg bg-offset dark:bg-textMain border border-borderMain/50 dark:border-borderMainDark/50'>
											<div className='flex'>
												<div>
													<div className='text-textMain dark:text-textMainDark selection:text-textMain selection:bg-super/50 dark:selection:text-superDuper dark:selection:bg-superDuper/10 font-medium text-base '>
														Make it yours
													</div>
													<div className='text-textOff dark:text-textOffDark selection:text-textMain selection:bg-super/50 dark:selection:text-superDuper dark:selection:bg-superDuper/10 text-sm'>
														Select topics and interests to customize your Discover experience
													</div>
												</div>
												<button
													type='button'
													className='aspect-square flex justify-center items-center h-6 rounded-full md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark md:hover:text-textMain dark:md:hover:text-textMainDark text-textOff dark:text-textOffDark text-xs font-medium transition duration-300 ease-in-out'
													onClick={() => {
														setExpand(!expand);
													}}
												>
													<div className=''>
														<svg
															aria-hidden='true'
															focusable='false'
															className='w-[1.25em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 384 512'
														>
															<path
																fill='currentColor'
																d='M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z'
															></path>
														</svg>
													</div>
												</button>
											</div>
											<div className='flex flex-wrap gap-2 font-medium text-sm text-super dark:text-textMainDark selection:text-textMain dark:selection:text-superDark selection:bg-super/50 dark:selection:bg-superDuper/10'>
												<button
													type='button'
													className='px-2 py-1 flex items-center justify-center gap-1 rounded-md bg-superBG dark:bg-superDark/10 border border-super/20 dark:border-superDark/20'
												>
													<div className='h-6 flex items-center translate-y-px'>
														<svg
															aria-hidden='true'
															focusable='false'
															data-prefix='far'
															data-icon='microchip-ai'
															className='w-[1.25em] h-[1em]'
															role='img'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 512 512'
														>
															<path
																fill='currentColor'
																d='M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V184h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM112 128c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16V384c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128zm224 44c-11 0-20 9-20 20V320c0 11 9 20 20 20s20-9 20-20V192c0-11-9-20-20-20zM234.3 184c-3.2-7.3-10.4-12-18.3-12s-15.1 4.7-18.3 12l-56 128c-4.4 10.1 .2 21.9 10.3 26.3s21.9-.2 26.3-10.3l5.3-12h64.8l5.3 12c4.4 10.1 16.2 14.7 26.3 10.3s14.7-16.2 10.3-26.3l-56-128zM216 241.9L230.9 276H201.1L216 241.9z'
															></path>
														</svg>
													</div>
													<div className='text-wrap'>Tech & Science</div>
												</button>
												<button
													type='button'
													className='px-2 py-1 flex items-center justify-center gap-1 rounded-md bg-superBG dark:bg-superDark/10 border border-super/20 dark:border-superDark/20'
												>
													<div className='h-6 flex items-center translate-y-px'>
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
																d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM276.8 133.6v14.2c9.7 1.2 19.4 3.9 29 6.6c1.9 .5 3.7 1 5.6 1.6c11.5 3.2 18.3 15.1 15.1 26.6s-15.1 18.2-26.6 15.1c-1.6-.4-3.1-.9-4.7-1.3c-7-2-14-3.9-21.1-5.3c-13.2-2.5-28.5-1.3-40.8 4c-11 4.8-20.1 16.4-7.6 24.4c9.8 6.3 21.8 9.5 33.2 12.6c2.4 .6 4.7 1.3 7 1.9c15.6 4.4 35.5 10.1 50.4 20.3c19.4 13.3 28.5 34.9 24.2 58.1c-4.1 22.4-19.7 37.1-38.4 44.7c-7.8 3.2-16.3 5.2-25.2 6.2l0 15.2c0 11.9-9.7 21.6-21.6 21.6s-21.6-9.7-21.6-21.6l0-17.4c-14.5-3.3-28.7-7.9-42.8-12.5c-11.3-3.7-17.5-16-13.7-27.3s16-17.5 27.3-13.7c2.5 .8 5 1.7 7.5 2.5c11.3 3.8 22.9 7.7 34.5 9.6c17 2.5 30.6 1 39.5-2.6c12-4.8 17.7-19.1 5.9-27.1c-10.1-6.9-22.6-10.3-34.5-13.5c-2.3-.6-4.5-1.2-6.8-1.9c-15.1-4.3-34-9.6-48.2-18.7c-19.5-12.5-29.4-33.3-25.2-56.4c4-21.8 21-36.3 39-44.1c5.5-2.4 11.4-4.3 17.5-5.7V133.6c0-11.9 9.7-21.6 21.6-21.6s21.6 9.7 21.6 21.6z'
															></path>
														</svg>
													</div>
													<div className='text-wrap'>Finance</div>
												</button>
												<button
													type='button'
													className='px-2 py-1 flex items-center justify-center gap-1 rounded-md bg-superBG dark:bg-superDark/10 border border-super/20 dark:border-superDark/20'
												>
													<div className='h-6 flex items-center translate-y-px'>
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
																d='M464 258.2c0 2.7-1 5.2-4.2 8c-3.8 3.1-10.1 5.8-17.8 5.8H344c-53 0-96 43-96 96c0 6.8 .7 13.4 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6l0 0c.7 1.6 1.4 3 1.9 4.3c5 11.5 5.6 15.4 5.6 17.1c0 5.3-1.9 9.5-3.8 11.8c-.9 1.1-1.6 1.6-2 1.8c-.3 .2-.8 .3-1.6 .4c-2.9 .1-5.7 .2-8.6 .2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 .7 0 1.4 0 2.2zm48 .5c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48h97.9c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z'
															></path>
														</svg>
													</div>
													<div className='text-wrap'>Arts & Culture</div>
												</button>
												<button
													type='button'
													className='px-2 py-1 flex items-center justify-center gap-1 rounded-md bg-superBG dark:bg-superDark/10 border border-super/20 dark:border-superDark/20'
												>
													<div className='h-6 flex items-center translate-y-px'>
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
																d='M4.1 38.2L106.4 191.5c11.2-11.6 23.7-21.9 37.3-30.6L68.4 48h64.5l54.9 91.5c15.8-5.5 32.4-9.1 49.6-10.6l-6.1-10.1L169.3 15.5C163.5 5.9 153.1 0 141.9 0H24.6C11 0 0 11 0 24.6c0 4.8 1.4 9.6 4.1 13.6zm276.6 80.5l-6.1 10.1c17.2 1.5 33.8 5.2 49.6 10.6L379.2 48h64.5L368.4 160.9c13.6 8.7 26.1 19 37.3 30.6L507.9 38.2c2.7-4 4.1-8.8 4.1-13.6C512 11 501 0 487.4 0H370.1c-11.2 0-21.7 5.9-27.4 15.5L280.8 118.7zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm7.2-257.5c-2.9-5.9-11.4-5.9-14.3 0l-19.2 38.9c-1.2 2.4-3.4 4-6 4.4L180.7 304c-6.6 1-9.2 9-4.4 13.6l31 30.2c1.9 1.8 2.7 4.5 2.3 7.1l-7.3 42.7c-1.1 6.5 5.7 11.5 11.6 8.4L252.3 386c2.3-1.2 5.1-1.2 7.4 0l38.4 20.2c5.9 3.1 12.7-1.9 11.6-8.4L302.4 355c-.4-2.6 .4-5.2 2.3-7.1l31-30.2c4.7-4.6 2.1-12.7-4.4-13.6l-42.9-6.2c-2.6-.4-4.9-2-6-4.4l-19.2-38.9z'
															></path>
														</svg>
													</div>
													<div className='text-wrap'>Sports</div>
												</button>
												<button
													type='button'
													className='px-2 py-1 flex items-center justify-center gap-1 rounded-md bg-superBG dark:bg-superDark/10 border border-super/20 dark:border-superDark/20'
												>
													<div className='h-6 flex items-center translate-y-px'>
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
																d='M64 48c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16H576c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM120 464H520c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z'
															></path>
														</svg>
													</div>
													<div className='text-wrap'>Entertainment</div>
												</button>
											</div>
											<div className='border-b border-b-textMain/10 dark:border-b-textMainDark/10'></div>
											<div className='flex justify-center items-center'>
												<button
													type='button'
													className='flex justify-center items-center w-full px-4 py-2 bg-super dark:bg-superDark dark:text-backgroundDark hover:opacity-80 transition duration-300 ease-in-out font-medium text-white rounded-full'
												>
													<div className='w-full shrink-0 truncate'>Save Interest</div>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='fixed bottom-4 right-4 m-2 hidden md:block'>
							<span>
								<button
									type='button'
									className='h-8 aspect-square bg-textMain dark:bg-textMainDark rounded-full text-textMainDark dark:text-textMain hover:text-superDuper active:scale-95 outline-none select-none transition duration-300 ease-in-out'
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
					<div className='fixed bottom-0 w-full h-mobileNavHeight bg-offset dark:bg-offsetDark flex md:hidden px-2'>
						<div className='flex-1 flex gap-x-4 h-14 text-textOff dark:text-textOffDark select-none'>
							<div className='w-full flex items-center justify-center relative overflow-clip'>
								<input type='radio' name='mnav' id='mbtn1' className='hidden absolute peer' />
								<label
									htmlFor='mbtn1'
									className='peer-checked:text-textMain cursor-pointer dark:peer-checked:text-textMainDark'
								>
									<div className='flex items-center min-w-0 flex-col h-max justify-center w-full gap-2 text-sm font-medium'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fak'
											data-icon='search'
											className='w-[1.25em] h-[1em] text-lg'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M236.8 288a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4zM434.9 398.7c-10.9 13.1-23 25.3-36.2 36.2l68.5 68.5 36.2-36.2-68.5-68.5zM236.8 32a204.8 204.8 0 1 1 0 409.6 204.8 204.8 0 1 1 0-409.6zm0 51.2a153.6 153.6 0 1 0 0 307.2 153.6 153.6 0 1 0 0-307.2z'
											></path>
										</svg>
										<div className='text-align-center relative truncate leading-none'>Home</div>
									</div>
								</label>
								<div className='absolute hidden peer-checked:block inset-0 h-[3px] rounded-full top-0 left-0 right-0 bg-textMain dark:bg-textMainDark'></div>
							</div>
							<div className='w-full flex items-center justify-center relative overflow-clip'>
								<input type='radio' name='mnav' id='mbtn2' defaultChecked={true} className='hidden absolute peer' />
								<label
									htmlFor='mbtn2'
									className='peer-checked:text-textMain cursor-pointer dark:peer-checked:text-textMainDark'
								>
									<div className='flex items-center min-w-0 flex-col h-max justify-center w-full gap-2 text-sm font-medium'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fak'
											data-icon='discover'
											className='w-[1.25em] h-[1em] text-lg'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 640 512'
										>
											<path
												fill='currentColor'
												d='M320 51.2c6.4 0 19.2 17.3 30.4 51.2c4.8 14.1 9 31.4 12.5 51.2c2.9 15.4 5.1 32.3 6.4 51.2c1.3 16 1.9 33 1.9 51.2h51.2c0-17-.6-34.2-1.9-51.2c-1.3-17.3-3.2-34.6-5.8-51.2c-2.9-17.9-6.4-35.2-10.9-51.2c-3.8-13.8-8-26.6-13.1-38.4C374.1 25.3 350.7 0 320 0s-54.1 25.3-70.7 64c-5.1 11.5-9.3 24.6-13.1 38.4h53.8c11.2-33.9 23.7-51.2 30.4-51.2H320zm0 409.6c-6.4 0-19.2-17.3-30.4-51.2c-4.8-14.1-9-31.4-12.5-51.2c-2.9-15.4-5.1-32.3-6.4-51.2c-1.3-16-1.9-33-1.9-51.2H217.6c0 17 .6 34.2 1.9 51.2c1.3 17.3 3.2 34.6 5.8 51.2c2.9 17.9 6.4 35.2 10.9 51.2c3.8 13.8 8 26.6 13.1 38.4c16.6 38.7 40 64 70.7 64s54.1-25.3 70.7-64c5.1-11.5 9.3-24.6 13.1-38.4H350.1c-11.2 33.9-23.7 51.2-30.4 51.2h.3zM550.4 145.3c-7.4-15-16-29.4-26.2-42.9c-25-33-57.6-59.8-95.4-77.8C395.8 9 359 0 320 0s-75.8 9-108.8 24.6c-37.8 17.9-70.4 44.8-95.4 77.8c-9.9 13.4-18.9 27.5-26.2 42.9C73.3 178.9 64 216.3 64 256s9.3 77.1 25.6 110.7c7.4 15 16 29.4 26.2 42.9c25 33 57.6 59.8 95.4 77.8C244.2 503 281 512 320 512s75.8-9 108.8-24.6c37.8-17.9 70.4-44.8 95.4-77.8c9.9-13.4 18.9-27.5 26.2-42.9c16.3-33.6 25.6-71 25.6-110.7s-9.3-77.1-25.6-110.7zM390.7 448c-22.1 8.3-45.8 12.8-70.7 12.8s-48.6-4.8-70.7-12.8c-23.7-9-45.4-21.8-64.3-38.4c-1-.6-1.6-1.6-2.6-2.2c-15.7-14.1-29.1-30.7-39.7-49h30.4c-2.2-16.6-4.2-33.9-5.1-51.2H121.9c-4.2-16.3-6.7-33.6-6.7-51.2s2.6-34.9 6.7-51.2H320V153.6H143c10.6-18.2 24-34.9 39.7-49c1-.6 1.6-1.6 2.6-2.2C204.2 86.1 225.6 73 249.6 64c22.1-8.3 45.8-12.8 70.7-12.8s48.6 4.8 70.7 12.8c23.7 9 45.4 21.8 64.3 38.4c1 .6 1.6 1.6 2.6 2.2c15.7 14.1 29.1 30.7 39.7 49H467.2c2.2 16.6 4.2 33.9 5.1 51.2h46.1c4.2 16.3 6.7 33.6 6.7 51.2s-2.6 34.9-6.7 51.2H320.3v51.2h177c-10.6 18.2-24 34.9-39.7 49c-1 .6-1.6 1.6-2.6 2.2c-18.9 16.3-40.3 29.4-64.3 38.4z'
											></path>
										</svg>
										<div className='text-align-center relative truncate leading-none'>Discover</div>
									</div>
								</label>
								<div className='absolute hidden peer-checked:block inset-0 h-[3px] rounded-full top-0 left-0 right-0 bg-textMain dark:bg-textMainDark'></div>
							</div>
							<div className='w-full flex items-center justify-center relative overflow-clip'>
								<input type='radio' name='mnav' id='mbtn3' className='hidden absolute peer' />
								<label
									htmlFor='mbtn3'
									className='peer-checked:text-textMain cursor-pointer dark:peer-checked:text-textMainDark'
								>
									<div className='flex items-center min-w-0 flex-col h-max justify-center w-full gap-2 text-sm font-medium'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='fak'
											data-icon='library'
											className='w-[1.25em] h-[1em] text-lg'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M512 281.6H460.8V256C460.8 143 369 51.2 256 51.2S51.2 143 51.2 256v25.6H0V256C0 114.9 114.9 0 256 0S512 114.9 512 256v25.6zm-102.4 0H358.4V256c0-56.3-46.1-102.4-102.4-102.4s-102.4 46.1-102.4 102.4v25.6H102.4V256c0-84.8 68.8-153.6 153.6-153.6s153.6 68.8 153.6 153.6v25.6zm-51.2 51.2c-41.9 0-79 20.5-102.4 51.8c-23.4-31.4-60.5-51.8-102.4-51.8H0V384H153.6c42.2 0 76.8 34.6 76.8 76.8v25.6h51.2V460.8c0-42.2 34.6-76.8 76.8-76.8H512V332.8H358.4zM256 307.2a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 1 0 0 102.4z'
											></path>
										</svg>
										<div className='text-align-center relative truncate leading-none'>Library</div>
									</div>
								</label>
								<div className='absolute hidden peer-checked:block inset-0 h-[3px] rounded-full top-0 left-0 right-0 bg-textMain dark:bg-textMainDark'></div>
							</div>
							<div className='w-full flex items-center justify-center relative overflow-clip'>
								<input type='radio' name='mnav' id='mbtn4' className='hidden absolute peer' />
								<label
									htmlFor='mbtn4'
									className='peer-checked:text-textMain cursor-pointer dark:peer-checked:text-textMainDark'
								>
									<div className='flex items-center min-w-0 flex-col h-max justify-center w-full gap-2 text-sm font-medium'>
										<svg
											aria-hidden='true'
											focusable='false'
											data-prefix='far'
											data-icon='right-to-bracket'
											className='w-[1.25em] h-[1em] text-lg'
											role='img'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 512 512'
										>
											<path
												fill='currentColor'
												d='M192 365.8L302 256 192 146.2l0 53.8c0 13.3-10.7 24-24 24L48 224l0 64 120 0c13.3 0 24 10.7 24 24l0 53.8zM352 256c0 11.5-4.6 22.5-12.7 30.6L223.2 402.4c-8.7 8.7-20.5 13.6-32.8 13.6c-25.6 0-46.4-20.8-46.4-46.4l0-33.6-96 0c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l96 0 0-33.6c0-25.6 20.8-46.4 46.4-46.4c12.3 0 24.1 4.9 32.8 13.6L339.3 225.4c8.1 8.1 12.7 19.1 12.7 30.6zm-8 176l80 0c22.1 0 40-17.9 40-40l0-272c0-22.1-17.9-40-40-40l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c48.6 0 88 39.4 88 88l0 272c0 48.6-39.4 88-88 88l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z'
											></path>
										</svg>
										<div className='text-align-center relative truncate leading-none'>Sign in</div>
									</div>
								</label>
								<div className='absolute hidden peer-checked:block inset-0 h-[3px] rounded-full top-0 left-0 right-0 bg-textMain dark:bg-textMainDark'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
