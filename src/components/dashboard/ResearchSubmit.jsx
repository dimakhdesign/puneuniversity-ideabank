import FormField from '../auth/FormField';
import { useForm } from "react-hook-form";
import Button from '../../ui/Button/Button';
import WhiteBox from '../../ui/WhiteBox';

const ResearchSubmit = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        // console.log(formData);
    }

    return (
        <>
            <p>Please submit your research here</p>

            <WhiteBox className='mt-5'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group flex-col mb-3">
                        <FormField
                            element="input"
                            placeholder="Enter research title..."
                            className="mt-3"
                            {...register("researchTitle", {
                                required: "Please enter the title",
                            })}
                            aria-invalid={errors.researchTitle ? "true" : "false"}
                        />
                        {errors.researchTitle?.type === "required" && (
                            <p className="text-red-600 text-xs">Please enter the title</p>
                        )}
                    </div>
                    <div className="form-group flex-col">
                        <FormField
                            element="textarea"
                            placeholder="Enter your research ideas..."
                            className="h-32 mt-3"
                            {...register("researchDescription", {
                                required: "Please enter your research",
                            })}
                            aria-invalid={errors.researchDescription ? "true" : "false"}
                        />
                        {errors.researchDescription?.type === "required" && (
                            <p className="text-red-600 text-xs">Please enter your research</p>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <Button text="Submit" type="submit" />
                    </div>
                </form>
            </WhiteBox>

        </>
    )
}

export default ResearchSubmit
