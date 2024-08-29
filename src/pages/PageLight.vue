<template>
  <page>
    <page-header>
      <template #title>ENERGY MANAGEMENT TOOL</template>
    </page-header>
    <page-body>
      <div class="q-pt-lg q-pb-md q-pl-lg q-pr-lg">
        <q-input
          v-model="deviceName"
          label="Device Name"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model.number="powerConsumption"
          type="number"
          label="Power Consumption (Watts)"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model.number="hoursUsed"
          type="number"
          label="Hours Used per Day"
          filled
          class="q-mb-md"
        />
        <q-input
          v-model.number="quantity"
          type="number"
          label="Quantity"
          filled
          class="q-mb-md"
        />
        <q-btn
          @click="addDevice"
          label="Add Device"
          color="primary"
          class="q-mb-md"
        />
        <div class="table-container">
          <q-table :rows="devices" :columns="columns" row-key="name" />
        </div>

        <div :style="{ color: selectedTextColor }">
          <div>Total Daily Consumption: {{ totalDailyConsumption }} kWh</div>
          <div>Total Weekly Consumption: {{ totalWeeklyConsumption }} kWh</div>
          <div>
            Total Monthly Consumption: {{ totalMonthlyConsumption }} kWh
          </div>
        </div>

        <q-input
          v-model.number="remainingUnits"
          type="number"
          label="Remaining Units in Token Meter"
          filled
          class="q-mb-md"
        />
        <div :style="{ color: selectedTextColor }">
          Difference: {{ remainingUnits - totalMonthlyConsumption }} kWh
        </div>
      </div>
      <div class="page-body-spacer-footer"></div>
    </page-body>
  </page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { QInput, QBtn, QTable } from "quasar";

export default defineComponent({
  name: "PageLight",
  setup() {
    const deviceName = ref("");
    const powerConsumption = ref(0);
    const hoursUsed = ref(0);
    const quantity = ref(0);
    const remainingUnits = ref(0);
    const devices = ref([]);

    const columns = [
      {
        name: "name",
        label: "Device Name",
        align: "left",
        field: (row) => row.name,
      },
      {
        name: "power",
        label: "Power Consumption (Watts)",
        align: "left",
        field: (row) => row.power,
      },
      {
        name: "hours",
        label: "Hours Used per Day",
        align: "left",
        field: (row) => row.hours,
      },
      {
        name: "quantity",
        label: "Quantity",
        align: "left",
        field: (row) => row.quantity,
      },
      {
        name: "daily",
        label: "Daily Consumption (kWh)",
        align: "left",
        field: (row) => row.daily,
      },
    ];

    const totalDailyConsumption = computed(() => {
      return devices.value.reduce((sum, device) => sum + device.daily, 0);
    });

    const totalWeeklyConsumption = computed(() => {
      return totalDailyConsumption.value * 7;
    });

    const totalMonthlyConsumption = computed(() => {
      return totalDailyConsumption.value * 30;
    });

    function addDevice() {
      // Validation to prevent empty records
      if (
        !deviceName.value ||
        powerConsumption.value <= 0 ||
        hoursUsed.value <= 0 ||
        quantity.value <= 0
      ) {
        alert("Please fill fields with valid values before adding.");
        return;
      }

      const dailyConsumption =
        (powerConsumption.value * hoursUsed.value * quantity.value) / 1000;

      devices.value.push({
        name: deviceName.value,
        power: powerConsumption.value,
        hours: hoursUsed.value,
        quantity: quantity.value,
        daily: dailyConsumption,
      });

      deviceName.value = "";
      powerConsumption.value = 0;
      hoursUsed.value = 0;
      quantity.value = 0;
    }

    return {
      deviceName,
      powerConsumption,
      hoursUsed,
      quantity,
      devices,
      columns,
      totalDailyConsumption,
      totalWeeklyConsumption,
      totalMonthlyConsumption,
      remainingUnits,
      addDevice,
      selectedTextColor: ref("green"),
    };
  },
});
</script>

<style scoped>
.q-radio {
  margin-right: 10px;
}
.table-container {
  max-width: 100%;
  overflow-x: auto;
  margin-bottom: 16px;
}

.q-table {
  table-layout: auto;
  width: 100%;
}
</style>
