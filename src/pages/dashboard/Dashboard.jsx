// src\pages\dashboard\Dashboard.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import styles from './Dashboard.module.css';
import imovelService from '../../services/imovelService';
import moradorService from '../../services/moradorService';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [imoveis, setImoveis] = useState([]);
  const [moradores, setMoradores] = useState([]);

  const fetchDashboard = useCallback(async () => {
    if (!user || !user.token) {
      setError("Acesso não autorizado. Por favor, faça login.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const dataImoveis = await imovelService.getAll(user.token);
      setImoveis(dataImoveis);
      const dataMoradores = await moradorService.getAll(user.token);
      setMoradores(dataMoradores);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (loading) {
    return (
      <div className={styles.dashboardContainer}>
        <h1>Bem-vindo ao Painel de Controle!</h1>
        <p>Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.dashboardContainer}>
        <h1>Bem-vindo ao Painel de Controle!</h1>
        <p>Visão geral rápida do seu condomínio.</p>
        <p style={{ color: 'red' }}>Erro: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <h1>Bem-vindo ao Painel de Controle!</h1>
      <p>Visão geral rápida do seu condomínio.</p>

      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardCard}>
          <h2>Imóveis Cadastrados</h2>
          <p>Total: {imoveis.length}</p>
          <Button
            variant="secondary"
            size="medium"
            onClick={() => navigate('/imoveis')}
          >
            Ver Detalhes
          </Button>
        </div>

        <div className={styles.dashboardCard}>
          <h2>Moradores Ativos</h2>
          <p>Total: {moradores.length}</p>
          <Button
            variant="secondary"
            size="medium"
            onClick={() => navigate('/moradores')}
          >
            Ver Detalhes
          </Button>
        </div>

        <div className={styles.dashboardCard}>
          <h2>Alertas Recentes</h2>
          <p>'falta implementar'</p>
          <Button
            variant="warning"
            size="medium"
            onClick={() => navigate('/dashboard')}
          >
            Ver Alertas
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;