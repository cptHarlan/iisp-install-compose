# iisp-install-compose
Docker compose per l'installazione di Nod-red, MongoDB, Redi e RabbitMQ

Passaggi preliminari:

1) Creare la rete iisp-net con: docker network create iisp-net  
2) Compilare .env con le credenziali
3) Lanciare il comando: docker compose -f docker-compose.iisp.yml up -d

5) Potrebbe essere necessario lanciare manualmente node-red (in via di risoluzione)
