// lib/api.ts
import axios from 'axios';
import { TypeAlunos } from '../components/type';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

// Requisições para Aluno
export const submitAlunoData = (client: TypeAlunos) => api.post('alunos/', client);
export const deleteAluno = (id: number) => api.delete(`alunos/${id}`);
export const getAllAluno = () => api.get<TypeAlunos[]>('alunos/all');
export const getAlunoPorId = (id: number) => api.get(`alunos/${id}`);
export const atualizaAluno = (id: number, client: TypeAlunos) => api.put(`alunos/${id}`, client);
