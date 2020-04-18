
// 
// const MDCRipple = mdc.ripple.MDCRipple;

InitiateTextField('mdc-text-field');
InitiateSelectField('mdc-select');
InitiateRipple('mdc-button');
InitiateRipple('mdc-fab');


function InitiateTextField(className) {
	const MDCTextField = mdc.textField.MDCTextField;
	const textFields = document.getElementsByClassName(className);
	for (let textField of textFields) {
		new MDCTextField(textField);
	}
}

function InitiateSelectField(className) {
	const MDCSelect = mdc.select.MDCSelect;
	const selectFields = document.getElementsByClassName(className);
	for (let selectField of selectFields) {
		new MDCSelect(selectField);
	}
}

function InitiateRipple(className) {
	const MDCRipple = mdc.ripple.MDCRipple;
	const ripples = document.getElementsByClassName(className);
	for (let ripple of ripples) {
		new MDCRipple(ripple);
	}
}


function AddMoreItemTaskFields() {
	const itemTaskField = document.createElement('div');
	itemTaskField.className = "row mt-4";
	const randomTextBoxClassName = RandomClassName();
	const randomSelectBoxClassName = RandomClassName();
	itemTaskField.innerHTML = `<div class="col-lg-2 mt-3"> <div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--outlined fieldinput"> <input type="text" class="mdc-text-field__input "> <div class="mdc-notched-outline"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label for="tf-outlined" class="mdc-floating-label">Item/Task</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="col-lg-3 mt-3"> <div class="mdc-select ${randomSelectBoxClassName} mdc-select--outlined fieldinput"> <input type="hidden" name="enhanced-select"> <i class="mdc-select__dropdown-icon"></i> <div class="mdc-select__selected-text "></div><div class="mdc-select__menu mdc-menu mdc-menu-surface"> <ul class="mdc-list "> <li class="mdc-list-item mdc-list-item--selected" data-value="noChanged"> No Changed </li><li class="mdc-list-item" data-value="delayed"> Delayed </li><li class="mdc-list-item" data-value="increased"> Increased </li></ul> </div><div class="mdc-notched-outline"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label class="mdc-floating-label">Previous</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="col-lg-3 mt-3"> <div class="mdc-select ${randomSelectBoxClassName} mdc-select--outlined fieldinput"> <input type="hidden" name="enhanced-select"> <i class="mdc-select__dropdown-icon"></i> <div class="mdc-select__selected-text "></div><div class="mdc-select__menu mdc-menu mdc-menu-surface"> <ul class="mdc-list "> <li class="mdc-list-item mdc-list-item--selected" data-value="noChanged"> No Changed </li><li class="mdc-list-item" data-value="delayed"> Delayed </li><li class="mdc-list-item" data-value="increased"> Increased </li></ul> </div><div class="mdc-notched-outline"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label class="mdc-floating-label">Current</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="col-lg-4 mt-3"> <div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--textarea item43Select fieldinput"> <textarea class="mdc-text-field__input resizeNone" rows="1"></textarea> <div class="mdc-notched-outline"> <div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"> <label for="textarea" class="mdc-floating-label">Comments</label> </div><div class="mdc-notched-outline__trailing"></div></div></div></div>`;
	const itemTaskWrapper = document.getElementById('itemTaskWrapper');
	itemTaskWrapper.insertBefore(itemTaskField, itemTaskWrapper.children[itemTaskWrapper.children.length - 1]);
	InitiateTextField(randomTextBoxClassName);
	InitiateSelectField(randomSelectBoxClassName);
}

function AddProductionSupportFields() {
	const productionSupportField = document.createElement('div');
	productionSupportField.className = "row";
	const randomTextBoxClassName = RandomClassName();
	productionSupportField.innerHTML = `<div class="col-lg-6 mt-3"><div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--outlined fieldinput prodSupport1"><input type="text" class="mdc-text-field__input "><div class="mdc-notched-outline"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label for="tf-outlined" class="mdc-floating-label">Production Support</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div><div class="col-lg-6 mt-3"><div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--textarea prod1Select fieldinput"><textarea class="mdc-text-field__input resizeNone" rows="1"></textarea><div class="mdc-notched-outline"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label for="textarea" class="mdc-floating-label">Comments</label></div><div class="mdc-notched-outline__trailing"></div></div></div></div>`;
	const productionSupportWrapper = document.getElementById('productionSupportWrapper');
	productionSupportWrapper.insertBefore(productionSupportField, productionSupportWrapper.children[productionSupportWrapper.children.length - 1]);
	InitiateTextField(randomTextBoxClassName);

}

function AddAccomplishmentsFields() {
	const accomplishmentsField = document.createElement('div');
	accomplishmentsField.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3";
	const randomTextBoxClassName = RandomClassName();
	accomplishmentsField.innerHTML = `<div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--outlined fieldinput"><input type="text" class="mdc-text-field__input "><div class="mdc-notched-outline"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label for="tf-outlined" class="mdc-floating-label">Top Accomplishments </label></div><div class="mdc-notched-outline__trailing"></div></div></div></div>`;
	const topAccomplishmentsWrapper = document.getElementById('topAccomplishmentsWrapper');
	topAccomplishmentsWrapper.insertBefore(accomplishmentsField, topAccomplishmentsWrapper.children[topAccomplishmentsWrapper.children.length - 1]);
	InitiateTextField(randomTextBoxClassName);

}

function nextSprintAccomplishmentsFields() {
	const nextAccomplishmentsField = document.createElement('div');
	nextAccomplishmentsField.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3";
	const randomTextBoxClassName = RandomClassName();
	nextAccomplishmentsField.innerHTML = `<div class="mdc-text-field ${randomTextBoxClassName} mdc-text-field--outlined fieldinput"><input type="text" class="mdc-text-field__input "><div class="mdc-notched-outline"><div class="mdc-notched-outline__leading"></div><div class="mdc-notched-outline__notch"><label for="tf-outlined" class="mdc-floating-label">Top Accomplishments </label></div><div class="mdc-notched-outline__trailing"></div></div></div></div>`;
	const nextAccomplishmentsWrapper = document.getElementById('nextAccomplishmentsWrapper');
	nextAccomplishmentsWrapper.insertBefore(nextAccomplishmentsField, nextAccomplishmentsWrapper.children[nextAccomplishmentsWrapper.children.length - 1]);
	InitiateTextField(randomTextBoxClassName);

}

function RandomClassName() {
	var text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < 5; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
};


function TriggerImageUploader(id) {
	document.getElementById(id).click();
}


function HandlImageUpload(event, id) {
	event.preventDefault();
	if (event.target.files.length > 0) {
		const file = event.target.files[0];
		const imageTypes = ['image/png', 'image/jpg', 'image/jpeg'];
		const imgExt = file.type;
		const imageWrapper = document.getElementById(id);
		if (imageTypes.includes(imgExt)) {
			const FR = new FileReader();
			FR.addEventListener("load", function (e) {
				const imageTag = `<img 
					src = '${e.target.result}'
				/>`;
				imageWrapper.innerHTML = imageTag;
			});
			FR.readAsDataURL(file);
		}else{
			const errorMessage = '<div class="errorMessage">Invalid image</div>';
			imageWrapper.innerHTML = errorMessage;
		}
	}
}

function HandleFormSubmit(event){
	event.preventDefault();
	const teamName = document.getElementById('teamName');
	const accountmanager = document.getElementById('accountmanager');
	const deliveryLead = document.getElementById('deliveryLead');
	const sprintNumber = document.getElementById('sprintNumber');
	const startDate = document.getElementById('startDate');
	const endDate = document.getElementById('endDate');
	const sprintComments = document.getElementById('sprintComments');
	const bugCount = document.getElementById('bugCount');
	const nextMilestone = document.getElementById('nextMilestone');
	const sprintActivity = document.getElementById('sprintActivity');
	const issueRisk = document.getElementById('issueRisk');
}



