import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { connect, useDispatch } from 'react-redux';
import { createStream } from '../actions';

function SubmitForm() {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });
    const dispatch = useDispatch();

    const onSubmit = (formValues) => {
        console.log(formValues);
        // const data = createStream(formValues);
        dispatch(createStream(formValues));
        // createStream(formValues);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="ui form">
                <label>Title</label> 
                {/* {errors.title && errors.title.type === "required" && (
                    <span role="alert">: This field is required</span>
                )} */}
                <input 
                    name="title"
                    ref={register({
                        required: "This is required."
                    })} 
                    placeholder="Title" 
                    style={{borderColor: errors.title && "red"}}
                />
                <ErrorMessage errors={errors} name="title" as="p" message="This is required"/>

                <label>Description</label>
                {/* {errors.title && errors.title.type === "required" && (
                    <span role="alert">: This field is required</span>
                )} */}
                <input 
                    name="description"
                    ref={register({
                        required: "This is required"
                    })}
                    placeholder="Description" 
                    style={{borderColor: errors.description && "red"}}
                />
                <ErrorMessage errors={errors} name="description" as="p"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default connect()(SubmitForm);
