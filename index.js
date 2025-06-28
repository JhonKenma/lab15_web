const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productosRoutes');
const sequelize = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);

// Sincronización y arranque del servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Base de datos sincronizada');
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`🚀 Backend corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al sincronizar base de datos:', err);
  });
