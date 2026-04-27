const baseLinks = {
    up1: "https://pay.finalizepagamento.store/69e6c1e22f29f6d4a0d64be2", // Verifique
    up2: "https://pay.finalizepagamento.store/69e6c225810f82eecedc4b95", // Prossiga
    up3: "https://pay.finalizepagamento.store/69e6c28f151e265f3d9eedd5", // Cadastro
    up4: "https://pay.finalizepagamento.store/69e6c2cb810f82eecedc4cf1", // Pendente
    up5: "https://pay.finalizepagamento.store/69e6c306810f82eecedc4d5e", // Ativar Conta
    up6: "https://pay.finalizepagamento.store/69e6c3282f29f6d4a0d64e60", // Registro
    up7: "https://pay.finalizepagamento.store/69e6c372151e265f3d9eef5e", // Acréscimo
    up8: "https://pay.finalizepagamento.store/69e6c3a5151e265f3d9eefe2", // Documento
    up9: "https://pay.finalizepagamento.store/69e6c3d3151e265f3d9ef033", // Aplicativo
    up10:"https://pay.finalizepagamento.store/69e6c472e69de7539e3ede4a", // Abertura
    up11:"https://pay.finalizepagamento.store/69e6c4ae151e265f3d9ef28a", // Consultoria
    up12:"https://pay.finalizepagamento.store/69e6c4e52f29f6d4a0d651bc"  // Administrativo
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
