const { z } = require('zod');

// Definindo um esquema personalizado para validar o tipo de usuário
const userTypeSchema = z.string().refine(value => {
  // Verifica se o valor está entre os três valores permitidos
  return ["Estudante", "Professor", "Participante"].includes(value);
}, {
  message: 'Tipo de usuário inválido. Deve ser "admin", "user" ou "guest".'
});

// Esquema de validação para os dados dos usuários
const userSchema = z.object({
  name: z.string().min(1), // O nome é obrigatório e deve ter pelo menos 1 caractere
  email: z.string().email(), // O email é obrigatório e deve ser um email válido
  password: z.string(), // A senha é obrigatória
  ra: z.string(), // RA é uma string opcional
  phone: z.string(), // O telefone é uma string opcional
  type: userTypeSchema, // O tipo de usuário é um número inteiro
  permission: z.string(), // A permissão é uma string opcional
});

module.exports = userSchema;