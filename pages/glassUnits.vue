<template>
  <div>
    {{ $t('glassUnitsDesc') }}
  </div>

  <div class="grid-list-row">
    <div>
      <button @click="doSearch('standart')" class="logo">
        <nuxt-img src="standart_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('heat')" class="logo">
        <nuxt-img src="heat_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('sun')" class="logo">
        <nuxt-img src="sun_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('hammer')" class="logo">
        <nuxt-img src="hammer_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('mute')" class="logo">
        <nuxt-img src="mute_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('decor')" class="logo">
        <nuxt-img src="decor_48.png" sizes="sm:48px" />
      </button>
    </div>
  </div>

  <table-lite
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    @do-search="doSearch"
    @is-finished="tableLoadingFinish"
    @return-checked-rows="updateCheckedRows"
  ></table-lite>
  <hr />
</template>

<script>
// import { defineComponent, reactive, ref, computed } from 'vue';
import TableLite from './components/TableLite.vue';

const heatData = () => {
  const data = [
    { name: 'Vienos kameros stiklo paketas' },
    {
      name: '4 - 16Ar - 4 Low e',
      thickness: '24',
      heatTransfer: '1,12',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: '4 - 10Kr - 4 Low e*',
      thickness: '18',
      heatTransfer: '1,04',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
      thickness: '36',
      heatTransfer: '0,49',
      lightTransmission: '74',
      lightReflection: '14/14',
      solarFactor: '53',
    },
    {
      name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
      thickness: '44',
      heatTransfer: '0,58',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
      thickness: '52',
      heatTransfer: '0,52',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
      thickness: '58',
      heatTransfer: '0,30',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
    {
      name: 'Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
      thickness: '68',
      heatTransfer: '0,39',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
  ];
  return data;
};
const sunData = () => {
  const data = [
    { name: 'SUN Vienos kameros stiklo paketas' },
    {
      name: '4 - 16Ar - 4 Low e',
      thickness: '24',
      heatTransfer: '1,12',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: '4 - 10Kr - 4 Low e*',
      thickness: '18',
      heatTransfer: '1,04',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
      thickness: '36',
      heatTransfer: '0,49',
      lightTransmission: '74',
      lightReflection: '14/14',
      solarFactor: '53',
    },
    {
      name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
      thickness: '44',
      heatTransfer: '0,58',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
      thickness: '52',
      heatTransfer: '0,52',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'SUN Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
      thickness: '58',
      heatTransfer: '0,30',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
    {
      name: 'SUN Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
      thickness: '68',
      heatTransfer: '0,39',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
  ];
  return data;
};
const standartData = () => {
  const data = [
    { name: 'STANDART Vienos kameros stiklo paketas' },
    {
      name: '4 - 16Ar - 4 Low e',
      thickness: '24',
      heatTransfer: '1,12',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: '4 - 10Kr - 4 Low e*',
      thickness: '18',
      heatTransfer: '1,04',
      lightTransmission: '82',
      lightReflection: '12/13',
      solarFactor: '65',
    },
    {
      name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
      thickness: '36',
      heatTransfer: '0,49',
      lightTransmission: '74',
      lightReflection: '14/14',
      solarFactor: '53',
    },
    {
      name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
      thickness: '44',
      heatTransfer: '0,58',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
      thickness: '52',
      heatTransfer: '0,52',
      lightTransmission: '75',
      lightReflection: '16/16',
      solarFactor: '54',
    },
    {
      name: 'STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
      thickness: '58',
      heatTransfer: '0,30',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
    {
      name: 'STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
      thickness: '68',
      heatTransfer: '0,39',
      lightTransmission: '68',
      lightReflection: '19/19',
      solarFactor: '48',
    },
  ];
  return data;
};

export default defineComponent({
  name: 'App',
  components: {
    TableLite,
  },
  setup() {
    ////////////////////////////
    //
    //  Table 1
    //
    // {
    //   rows: [{
    //     name: 'Vienos kameros stiklo paketas 4 - 16Ar - 4 Low e',
    //     thickness: '24',
    //     heatTransfer: '1,12',
    //     lightTransmission: '82',
    //     lightReflection: '12/13',
    //     solarFactor: '65',
    //   },{
    //     name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
    //     thickness: '36',
    //     heatTransfer: '0,49',
    //     lightTransmission: '74',
    //     lightReflection: '14/14',
    //     solarFactor: '53',
    //   }],
    //   count: 2,
    //   ...something
    // }

    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: 'Stiklo paketo struktūra, Pavadinimas',
          field: 'name',
          width: '30%',
          sortable: false,
          isKey: true,
        },
        {
          label: 'Paketo storis, mm',
          field: 'thickness',
          width: '5%',
          sortable: false,
        },
        {
          label: 'Šilumos perdavimo koeficientas, Ug, W/m2K',
          field: 'heatTransfer',
          width: '5%',
          sortable: false,
        },
        {
          label: 'Šviesos laidumas, LT, %',
          field: 'lightTransmission',
          width: '5%',
          sortable: false,
        },
        {
          label: 'Išorinis šviesos atspindėjimas, LR, %',
          field: 'lightReflection',
          width: '5%',
          sortable: false,
        },
        {
          label: 'Saulės faktorius, g, %',
          field: 'solarFactor',
          width: '5%',
          sortable: false,
        },
      ],
      rows: heatData(),
      // totalRecordCount: 20,
      // sortable: {
      //   order: 'id',
      //   sort: 'asc',
      // },
      messages: {},
      // messages: {
      //   pagingInfo: 'Showing {0}-{1} of {2}',
      //   pageSizeChangeLabel: 'Row count:',
      //   gotoPageLabel: 'Go to page:',
      //   noDataAvailable: 'No data',
      // },
    });

    const doSearch = (order) => {
      table.isLoading = true;
      // table.sortable.order = order;
      if (order === 'standart') {
        alert(order);
        table.rows = standartData();
      }
      if (order === 'heat') {
        alert(order);
        table.rows = heatData();
      }
      if (order === 'sun') {
        alert(order);
        table.rows = sunData();
      }
      // setTimeout(() => {
      //   table.isReSearch = offset == undefined ? true : false;
      //   if (offset >= 10 || limit >= 20) {
      //     limit = 20;
      //   }
      //   if (sort == 'asc') {
      //     table.rows = sampleData1(offset, limit);
      //   } else {
      //     table.rows = sampleData2(offset, limit);
      //   }
      //   table.totalRecordCount = 20;
      //   table.sortable.order = order;
      //   table.sortable.sort = sort;
      // }, 600);
    };

    /**
     * 資料讀取結束事件
     *
     * @param Collection elements 靜態元件
     */
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      // Array.prototype.forEach.call(elements, function (element) {
      //   if (element.classList.contains('name-btn')) {
      //     element.addEventListener('click', function () {
      //       console.log(this.dataset.id + ' name-btn click!!');
      //     });
      //   }
      //   if (element.classList.contains('quick-btn')) {
      //     // 設定快捷按鈕點擊事件
      //     element.addEventListener('click', function () {
      //       console.log(this.dataset.id + ' quick-btn click!!');
      //     });
      //   }
      // });
    };

    /**
     * 更新目前選上的資料
     */
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };

    return {
      // searchTerm,
      table,
      // table2,
      // table3,
      doSearch,
      // doSearch3,
      tableLoadingFinish,
      updateCheckedRows,
    };
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/* .container {
  display: flex;
  justify-content: right;
  margin-top: 0px;
  padding: 0;
  margin: 1em 0;
} */

.grid-list-row {
  /* position: relative; */
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  margin-bottom: 2em;
  overflow-wrap: break-word;
  align-items: center;
}

.logo {
  max-height: 50px;
  /* margin-top: 0px; */
  padding: 0;
  margin: 1em;
}

.bg-gold {
  background: gold !important;
}
.bg-gray {
  background: gray !important;
}
.color-red {
  color: red !important;
}

.vtl-table thead th {
  vertical-align: bottom;
  color: #fff;
  background-color: #31b146;
  border-color: #454d55;
  border-bottom: 2px solid #dee2e6;
}
</style>
