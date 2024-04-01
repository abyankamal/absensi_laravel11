import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import SelectBox from "@/Components/SelectBox";
import { useEffect, useState } from "react";

export default function SubmitAttendance({ auth }) {
    const [transitioning, setTransitioning] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        status: "attend",
        description: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("attendances.submit"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Absensi Berhasil Disubmit");
            },
            onError: (errors) => {
                console.log("errors");
            },
        });
    };

    useEffect(() => {
        if (data.status === "attend") {
            setTransitioning(false);
        } else {
            setTransitioning(true);
        }
    }, [data.status]);
    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="Info" value="SIlahkan Lakukan Absensi" />

                <SelectBox
                    options={[
                        { value: "attend", label: "Hadir" },
                        { value: "sick", label: "Cuti" },
                        { value: "leave", label: "Sakit" },
                        { value: "permit", label: "Izin" },
                        { value: "business_trip", label: "Perjalanan Dinas" },
                        {
                            value: "remote",
                            label: "Kerja Remote (diluar kantor)",
                        },
                    ]}
                    className="mt-1 block w-full"
                    onChange={(e) => {
                        setData("status", e.target.value);
                    }}
                />

                <InputError className="mt-2" message={errors.name} />
            </div>

            <Transition
                show={transitioning}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <div>
                    <InputLabel htmlFor="password" value="Berikan Alasannya" />

                    <TextInput
                        id="password"
                        value={data.password}
                        onChange={(e) => setData("description", e.target.value)}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
            </Transition>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Absensi</PrimaryButton>
            </div>
        </form>
    );
}
