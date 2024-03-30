function generateForm(formStructure: { title: string | null; fields: any[]; }) {
    const formContainer = document.getElementById("form-container");
    const form = document.createElement("form");
    form.classList.add("row", "g-3");

    const formTitle = document.createElement("h2");
    formTitle.textContent = formStructure.title;
    form.appendChild(formTitle);

    formStructure.fields.forEach((field: { type: string; label: string | null; id: string; classNames: any[] | null | undefined; }) => {
        const formField = document.createElement("div");
        formField.classList.add("mb-3");

        if (field.type === "submit") {
            const submitButton = document.createElement("button");
            submitButton.type = "submit";
            submitButton.textContent = field.label;
            if (field.classNames !== undefined && field.classNames !== null && field.classNames.length > 0) {
                field.classNames.forEach((className: string) => {
                    submitButton.classList.add(className);
                });
            }
            formField.appendChild(submitButton);
        } else {
            const label = document.createElement("label");
            label.textContent = field.label;
            if (field.classNames !== undefined && field.classNames !== null && field.classNames.length > 0) {
                field.classNames.forEach((className: string) => {
                    label.classList.add(className);
                });
            }
            formField.appendChild(label);

            const input = document.createElement("input");
            input.type = field.type;
            input.id = field.id;
            if (field.classNames !== undefined && field.classNames !== null && field.classNames.length > 0) {
                field.classNames.forEach((className: string) => {
                    input.classList.add(className);
                });
            }
            formField.appendChild(input);
        }

        form.appendChild(formField);
    });

    formContainer?.appendChild(form);
}

document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("form-container");
    const formStructureJson = formContainer?.getAttribute("data-form-structure");

    if (formStructureJson) {
        const formStructure = JSON.parse(formStructureJson);
        generateForm(formStructure);
    }
});