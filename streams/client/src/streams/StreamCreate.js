import React from 'react';
import { clearSubmitErrors, Field, reduxForm } from 'redux-form'

// const StreamCreate = () => {
class StreamCreate extends React.Component {
    renderError({ touched, error }){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        };
    };
    renderInput = ( { input, label, meta } ) => {
        // console.log(formProps);
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                { this.renderError(meta) }
            </div>
        );
    };

    onSubmit(formValues){
        console.log(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const error={};

    if (!formValues.title){
        //if user did not enter valid title
        error.title = 'You must enter a title';
    }

    if (!formValues.description) {
        error.description = 'You must enter a description';
    }

    return error;
};

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);