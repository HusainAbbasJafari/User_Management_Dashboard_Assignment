import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { addNewUser } from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "@/hooks/use-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  company: yup.string().required("Company is required"),
});

export default function AddUserForm() {
  const {users} = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const userExists = (email) => {
    return users.some((user) => user.email === email);
  }
  const onSubmit = (data) => {
    const phoneNumber = parsePhoneNumberFromString(`+${data.phone}`);
    if (!phoneNumber || !phoneNumber.isValid()) {
      setError("phone", {
        type: "manual",
        message: "Invalid phone number for selected country",
      });
      return;
    }
    const newUser = {
      id: Date.now(),
      ...data,
    };
    if(userExists(data?.email)){
      setError("email", {
        type: "manual",
        message: "A user with this email already exists",
      });
      toast({
        title: "User Exists",
        description: "A user with this email already exists.",
        variant:"danger"
      })
    }else{
      dispatch(addNewUser(newUser));
      toast({
        title: "User Created",
        description: `${data?.name} has been added successfully.`,
        variant:"success"
      })
      navigate("/");
    }
    reset();
  };

  return (
    
    <div className="flex items-center h-full">
      <Card className="w-full mx-auto max-w-md shadow-md">
        <CardHeader>
          <CardTitle>Create New User</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid w-full items-center gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid w-full items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

           
            <div className="grid w-full items-center gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={"in"}
                    enableSearch
                    inputClass="p-2  !border !border-border !w-full !bg-transparent !text-primary  rounded-md"
                    placeholder="Enter phone number"
                    onChange={(value) => field.onChange(value)}
                  />
                )}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

           
           <div className="grid w-full items-center gap-3">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                placeholder="Enter company name"
                {...register("company")}
              />
              {errors.company && (
                <p className="text-sm text-red-500">{errors.company.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Create User
            </Button>
          </form>
        </CardContent>
      </Card>
   </div>
  );
}
