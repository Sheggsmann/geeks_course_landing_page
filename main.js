// Implementing the faq.  

function faq() {
	const faqs = document.querySelectorAll('.faq-item')
	faqs.forEach(faq => {
		faq.addEventListener('click', () => handleFaq(faq))
	})

	function handleFaq(faq) {
		console.log(faq.getBoundingClientRect())
		let icon = faq.querySelector('.las')
		faq.style.transition = '.5s'

		if (faq.style.height == '120px') {
			faq.style.height = '60px'
			icon.classList.replace('la-times', 'la-plus')
			return
		}

		faqs.forEach(faq => {
			faq.style.height = '60px'
			faq.querySelector('.las').classList.replace('la-times', 'la-plus')
		})
		
		faq.style.height = '120px'
		// Change the icon
		icon.classList.replace('la-plus', 'la-times')
	}
}

faq()