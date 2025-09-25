// src\pages\moradores\MoradoresTable.jsx

import React from 'react';
import Button from '../../components/common/Button';
import stylesDataTable from '../../components/common/DataTable.module.css';
import stylesPageLayout from '../../components/layout/PageLayout.module.css';
import { formatarCelular } from '../../utils/formatters';

import styles from './MoradoresTable.module.css';

function MoradoresTable({ moradores, onEdit, onDelete }) {
  return (
    <div className={stylesPageLayout.tableContainer}>
      <table className={stylesDataTable.dataTable}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Celular</th>
            <th>Data entrada</th>
            <th>Data saída</th>
            <th>Imóvel 'Bloco-Apto'</th>
            <th>Proprietário</th>
            <th className={stylesDataTable.action}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {moradores.length === 0 && (
            <tr>
              <td colSpan="8" style={{ textAlign: 'center' }}>  Nenhum morador encontrado.</td>
            </tr>
          )}
          {moradores.map(morador => (
            <tr key={morador.id}>
              <td>{morador.id}</td>
              <td>{morador.nome}</td>
              <td>{formatarCelular(morador.celular)}</td>
              <td>
                {morador.dataEntrada && new Date(morador.dataEntrada).toLocaleDateString()}
              </td>
              <td>
                {morador.dataSaida && new Date(morador.dataSaida).toLocaleDateString()}
              </td>
              <td>{morador.imovelDto?.bloco} - {morador.imovelDto?.apartamento}</td>
              <td className={`${styles.status} ${morador.isProprietario ? styles.sim : styles.nao}`}>
                {morador.isProprietario ? 'Sim' : 'Não'}
              </td>
              <td className={stylesDataTable.action}>
                <Button
                  variant="primary"
                  size="small"
                  onClick={() => onEdit(morador)}
                  customClass={stylesDataTable.actionButton}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => onDelete(morador.id)}
                  customClass={stylesDataTable.actionButton}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoradoresTable;