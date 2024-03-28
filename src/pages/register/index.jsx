import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import {
  Container,
  Column,
  ErrorText,
  Title,
  TitleLogin,
  SubtitleLogin,
  Wrapper,
  AlreadyHaveAccount,
  BoldText,
  InlineComponents,
  DescriptionTerms,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlinePerson, MdEmail, MdLock } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const schema = yup
    .object({
      username: yup.string().required(),
      email: yup.string().email().required(),
      senha: yup.string().min(3, "Senha muito curta").required(),
    })
    .required();
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    navigate("/feed");
  };

  const handleHaveAccount = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome completo"
                leftIcon={<MdOutlinePerson />}
                name="username"
                control={control}
              />
              {errors?.username && (
                <ErrorText>Insira corretamente o seu nome</ErrorText>
              )}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors?.email && <ErrorText>E-mail é obrigatório</ErrorText>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors?.senha && <ErrorText>{errors?.senha?.message}</ErrorText>}
              <DescriptionTerms>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </DescriptionTerms>
              <InlineComponents>
                <BoldText> Já tenho conta.</BoldText>
                <AlreadyHaveAccount onClick={handleHaveAccount}>
                  Fazer Login.
                </AlreadyHaveAccount>
              </InlineComponents>

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
