import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileScan } from "lucide-react";
import { useForm } from "react-hook-form";
import { IFormData } from "../types/Formdata";
import { IUploadFormProps } from "../types/UploadForm";

const UploadForm = ({ onUpload, loading }: IUploadFormProps) => {
    const form = useForm<IFormData>({
        defaultValues: {
            files: undefined,
        },
    });

    const handleSubmit = async (data: IFormData) => {
        await onUpload(data);
        form.reset();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-fit">
                    Cập nhật lịch tuần
                    <FileScan className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-4 rounded-md w-[90%] sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Tải lên lịch tuần mới</DialogTitle>
                    <DialogDescription>Chỉ chấp nhận tệp .docx.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="files"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tệp lịch tuần</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept=".docx"
                                            onChange={(e) => field.onChange(e.target.files)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit" isLoading={loading}>
                                    Tải lên
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default UploadForm;