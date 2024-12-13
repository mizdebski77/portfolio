import {
    Form,
    FormTitle,
    Input,
    InputWrapper,
    Label,
    Legend,
    TextArea,
    Wrapper,
} from "./sContact";
import {
    Button,
    ButtonContent,
    Title,
} from "../../common/components/components";
import { MdEmail, MdOutlineMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
    return (
        <Wrapper id="contact">
            <Title>Contact</Title>

            <Form>
                <FormTitle>Get in Touch</FormTitle>
                <InputWrapper>
                    <Label>
                        <Legend>
                            <FaRegUser /> First Name
                        </Legend>
                        <Input placeholder="Marcin" />
                    </Label>
                    <Label>
                        <Legend>
                            <FaUser /> Last Name
                        </Legend>
                        <Input placeholder="Izdebski" />
                    </Label>
                </InputWrapper>
                <Label>
                    <Legend>
                        <FaPhone /> Phone Number
                    </Legend>
                    <Input placeholder="123-456-789" />
                </Label>
                <Label>
                    <Legend>
                        <MdOutlineEmail />
                        E-Mail
                    </Legend>
                    <Input placeholder="example@gmail.com" />
                </Label>
                <Label>
                    <Legend>
                        <MdOutlineMessage />
                        Message
                    </Legend>
                    <TextArea placeholder="Your message here:" />
                </Label>
                <Button style={{ margin: "auto" }}>
                    <ButtonContent>
                        <MdEmail />
                        <span>Send message</span>
                    </ButtonContent>
                </Button>
            </Form>
        </Wrapper>
    );
};
