"use strict";
function generateForm(formStructure) {
    const formContainer = document.getElementById("form-container");
    const form = document.createElement("form");
    const formTitle = document.createElement("h2");
    formTitle.textContent = formStructure.title;
    form.appendChild(formTitle);
    formStructure.fields.forEach((field) => {
        const formField = document.createElement("div");
        if (field.type === "submit") {
            const submitButton = document.createElement("button");
            submitButton.type = "submit";
            submitButton.textContent = field.label;
            formField.appendChild(submitButton);
        }
        else {
            const label = document.createElement("label");
            label.textContent = field.label;
            formField.appendChild(label);
            const input = document.createElement("input");
            input.type = field.type;
            input.id = field.id;
            formField.appendChild(input);
        }
        form.appendChild(formField);
    });
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.appendChild(form);
}
const formContainer = document.getElementById("form-container");
const formStructureJson = formContainer === null || formContainer === void 0 ? void 0 : formContainer.getAttribute("data-form-structure");
if (formStructureJson) {
    const formStructure = JSON.parse(formStructureJson);
    generateForm(formStructure);
}
