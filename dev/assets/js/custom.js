const headerNav = document.querySelector('.header-nav')
const burger = document.querySelector('.btn-burger')
burger.addEventListener('click', () => headerNav.classList.toggle('show'))

const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')


    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')

            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })

	const addBooking =(builds)=> builds.forEach(build =>{
		 const buildLink = build.closest('a')
		 const flatQuantity = build.getAttribute('data-flat-quantity')
		 const flatQuantityToNumber = parseInt(flatQuantity)
		flatQuantityToNumber ? flatQuantityToNumber >= 0 : buildLink.classList.add('booking')

		buildLink.addEventListener('click', (event)=> {
			if (buildLink.classList.contains('booking')) {
				event.preventDefault()
			}
		})

	})
	addBooking(builds)
}

document.querySelector('.genplan') ? installGenplan() : null