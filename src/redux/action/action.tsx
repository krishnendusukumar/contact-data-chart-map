import { FORM_SUBMIT, CONTACT_DELETE } from "../action/contactAction";

export interface FormState {
    firstName: string;
    lastName: string;
    status: 'active' | 'inactive';
}

export const formSubmit = (formData: FormState) => {
    return {
        type: FORM_SUBMIT,
        payload: formData,
    };
};

export const contactDelete = (id: Number) => {
    return {
        type: CONTACT_DELETE,
        payload: id,
    };
};

export const contactEdit = (index: Number, formData: FormState) => {
    return {
        type: "CONTACT_EDIT",
        payload: { index, formData },
    };
};
