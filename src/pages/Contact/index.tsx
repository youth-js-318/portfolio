import { Button, Flex, Select, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactPage = () => {

    const {
        register,
        handleSubmit
    } = useForm()

    const onSubmit = (values: any) => {
        console.log(values)

        axios.post('https://formsubmit.co/ajax/pamplona.developer@gmail.com', {
            ...values,
            '_subject': 'Envio do formulário - ' + values.subject,
            '_replyto': values.email
        })
    }

    return (
        <div>
            <h1>Contato</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction={"column"} gap={"3"} className="form-column">
                    <TextField.Root
                        {...register('name', {
                            required: 'Seu nome é obrigatório'
                        })}
                        placeholder="Seu nome"
                        required
                    />

                    <TextField.Root
                        {...register('email', {
                            required: 'O email é obrigatório',
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}
                        placeholder="johndoe@gmail.com"
                        type="email"
                    />

                    <Select.Root {...register('subject')}>
                        <Select.Trigger placeholder="Selecione um assunto" />
                        <Select.Content>
                            <Select.Item value="orcamento">Orçamento</Select.Item>
                            <Select.Item value="consultoria">Consultoria</Select.Item>
                            <Select.Item value="suporte">Suporte</Select.Item>
                            <Select.Item value="outros">Outros</Select.Item>
                        </Select.Content>
                    </Select.Root>

                    <TextArea
                        {...register('message')}
                        placeholder="Sobre o que quer conversar?"
                        required
                    />

                    <Button type="submit">Enviar</Button>
                </Flex>
            </form>

            <div className="social-column">

            </div>
        </div>
    )
}

export default ContactPage;