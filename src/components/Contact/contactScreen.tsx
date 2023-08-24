import { useNavigate } from "react-router-dom";
import { store } from "../../store"
import { useDispatch, useSelector } from "react-redux";
import { contactDelete } from "../../redux/action/action";
import noData from "../../assets/no-data.jpg"


export default function () {
    const myData = useSelector(() => store.getState().formData.list);
    // console.log(myData);
    const navigate = useNavigate();
    const dispatch = useDispatch();




    return (
        <>
            <button
                type="button"
                onClick={() => {
                    localStorage.removeItem("checkEdit");
                    navigate("/contact-form");
                }}
                style={{ backgroundColor: "#2266d4" }}
                className=" ml-10 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
            >
                +Add
            </button>
            {myData.length != 0 ? (
                <div className="container p-10 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-6 gap-10">
                    {myData.map((e, i) => {
                        return (
                            <>
                                <div
                                    key={i + 1}
                                    className="block rounded-xl bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                                >
                                    <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                        Contact
                                    </div>
                                    <div className="p-6">
                                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            Card - {i + 1}
                                        </h5>
                                        <button
                                            onClick={() => {
                                                localStorage.setItem("editIndex", String(i));
                                                navigate("/details");
                                            }}
                                            style={{ backgroundColor: "#186aefa0" }}
                                            type="button"
                                            className="inline-block rounded bg-sky-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(99,193,292,0.1)]"
                                        >
                                            Show Detail
                                        </button>
                                    </div>
                                    <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 display-flex justifiy-center">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem("checkEdit", String(i));
                                                navigate("/contact-form");
                                            }}
                                            style={{ backgroundColor: "#09b13c9f" }}
                                            type="button"
                                            className="inline-block rounded bg-primery mx-2 p-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="dark"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => {
                                                dispatch(contactDelete(i));
                                            }}
                                            style={{ backgroundColor: "#a809099f" }}
                                            type="button"
                                            className="inline-block rounded bg-primery mx-2 p-2 text-xs font-medium uppercase leading-normal text-white "
                                            data-te-ripple-init
                                            data-te-ripple-color="dark"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            ) : (
                <div className="flex mt-24">
                    <img src={noData} className="w-60 rounded-full text-center" alt="" />
                    <h2 className="text-white font-bold text-2xl text-center mt-16 ml-10">No data found!</h2>
                </div>
            )}
        </>
    );
}
