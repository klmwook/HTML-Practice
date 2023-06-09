//내가 만든거~
/*
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
const convertedSpeed = coverySpeed(boxs[0]);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault;

		//이미 선택이 되어있으면 함수 빠지기
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;

		[btns, boxs].forEach((el) => activation(el, idx));

		matchHT(idx);

		//내가 작업 한 것
		/*     
		  //height 값 가져와서 찍어주기
		  //console.log(getComputedStyle(boxs[idx])['height']);
		  main.style.height = getComputedStyle(boxs[idx])['height'];
    */
	});
});

//탭 기능 구현 함수
function activation(arrEl, index) {
	try {
		for (const el of arrEl) el.classList.remove('on');
		arrEl[index].classList.add('on');
	} catch (err) {
		console.log(err.message);
	}
}

//변경 된 height 가져온 것 처리 함수
function matchHT(index) {
	try {
		const activeHT = parseInt(getComputedStyle(boxs[index]).height);

		new Anime(main, {
			prop: 'height',
			value: activeHT,
			duration: convertedSpeed,
		});
	} catch (err) {
		console.log(err.message);
	}
}

//css에 있는 duration 값을 가져와서 javascript에서 쓰기
function coverySpeed(el) {
	try {
		return parseFloat(getComputedStyle(el).transitionDuration) * 1000;
	} catch (err) {
		console.log(err.message);
	}
}
