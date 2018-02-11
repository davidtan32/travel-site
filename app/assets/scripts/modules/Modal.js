import $ from 'jquery';

class Modal {
	constructor(){
		this.openModalButtom = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButtom = $(".modal__close");
		this.events();
	}

	events(){
		// clicking the open modal button
		// use bind() to remain 'this' to be our main class object
		this.openModalButtom.click(this.openModal.bind(this));

		// clicking the x close modal button
		this.closeModalButtom.click(this.closeModal.bind(this));

		// pushes the escape or any key
		$(document).keyup(this.keyPressHandler.bind(this)); 
	}

	keyPressHandler(e) {
		if( e.keyCode == 27){
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		// prevent the window scroll to top after the clicking
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}


}

export default Modal;