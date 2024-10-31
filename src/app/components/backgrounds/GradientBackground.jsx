'use client'
import React, { useEffect } from 'react'

export default function GradientBackground() {

	useEffect(() => {
		let curX = 0;
		let curY = 0;
	
		let tgX = 0;
		let tgY = 0;
	
		const interBubble = document.querySelector('.interactive');
	
		function move() {
		  curX += (tgX - curX) / 30;
		  curY += (tgY - curY) / 30;
	
		  if (interBubble) {
			interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
		  }
	
		  requestAnimationFrame(() => {
			move();
		  });
		}
	
		window.addEventListener('mousemove', (event) => {
		  tgX = event.clientX;
		  tgY = event.clientY;
		});
	
		move();
	
		return () => {
		  window.removeEventListener('mousemove', () => { });
		};
	  }, []);

	return (
		<div className="gradient-bg">
			<svg id='svg1' xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
							result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
			<div className="gradient-container">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
				<div className="circle-3"></div>
				<div className="circle-4"></div>
				<div className="circle-5"></div>
				<div className="interactive"></div>
			</div>
		</div>
	)
}
