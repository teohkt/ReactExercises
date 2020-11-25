import React from "react";
import { useForm } from "react-hook-form";

function SubmitForm() {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="ui form">
                <label>Title</label> 
                {errors.title && errors.title.type === "required" && (
                    <span role="alert">: This field is required</span>
                )}
                <input 
                    name="title"
                    ref={register({
                        required: true
                    })} 
                    placeholder="Title" 
                    style={{borderColor: errors.title && "red"}}
                />

                <label>Description</label>
                {errors.title && errors.title.type === "required" && (
                    <span role="alert">: This field is required</span>
                )}
                <input 
                    name="description"
                    ref={register({
                        required: true
                    })}
                    placeholder="Description" 
                    style={{borderColor: errors.description && "red"}}
                />


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SubmitForm;
