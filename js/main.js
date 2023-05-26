/*
내가 만든거~ 
const tab_btns = document.querySelector('#tab_btn');
const tab_areas = document.querySelector('#tab_area');

const tab_btns_child = Array.from(tab_btns.children);
const tab_areas_child = Array.from(tab_areas.children);

tab_btns_child.forEach((data, idx) => {
	data.addEventListener('click', (e) => {
		console.log('hi');
		fninit(Array.from(tab_btns.children), Array.from(tab_areas.children));

		tab_btns_child[idx].classList.add('on');
		tab_areas_child[idx].classList.add('on');
	});
});

function fninit(tabs, areas) {
	for (const tab_btn of tabs) tab_btn.classList.remove('on');
	for (const tab_area of areas) tab_area.classList.remove('on');
}
*/

const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault;

		//이미 선택이 되어있으면 함수 빠지기
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;

		[btns, boxs].forEach((el) => activation(el, idx));

		const activeHT = parseInt(getComputedStyle(boxs[idx]).height);

		new Anime(main, {
			prop: 'height',
			value: activeHT,
			duration: 500,
		});

		/* 
    내가 작업 한 것 
		  //height 값 가져와서 찍어주기
		  //console.log(getComputedStyle(boxs[idx])['height']);
		  main.style.height = getComputedStyle(boxs[idx])['height'];
    */
	});
});

function activation(arrEl, index) {
	try {
		for (const el of arrEl) el.classList.remove('on');
		arrEl[index].classList.add('on');
	} catch (err) {
		console.log(err.message);
	}
}
