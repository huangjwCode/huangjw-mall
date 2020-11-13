<template>
  <div id="detail_params" v-if="Object.keys(paramInfo).length != 0">
    <!--<table class="params_rule">
      <tbody>
        <tr
          v-for="(item, index) in paramInfo.sizes[0]"
          :key="index"
          v-if="item[1] != '-'"
        >
          <th>{{ item[0] }}</th>
          <td v-for="(td_item, td_index) in item.length - 1" :key="td_index">
            {{ item[td_item] }}
          </td>
        </tr>
      </tbody>
    </table>-->
    <table class="params_set">
      <tbody>
        <tr v-for="(item, index) in paramInfo.infos" :key="index">
          <th>{{ item.name }}</th>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
    <!--<div class="info_img" v-if="paramInfo.image != ''">
      <img :src="paramInfo.image" alt="" />
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style>
#detail_params {
  font-size: 0.65rem;
  padding: 0.42rem 0.34rem;
  border-bottom: 0.3rem solid rgba(128, 128, 128, 0.2);
}

.params_rule,
.params_set {
  /*border-bottom: 0.1rem solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse;
  margin: 0 auto;
  margin-bottom: 0.42rem;
  width: 13.568rem;*/
  font-size: 0.28rem;
  padding: 0 0.3rem;
  margin-top: 0.4rem;
}
.params_rule tr,
.params_set tr {

}

.params_rule th {
  text-align: left;
  padding-right: 1rem;
  white-space: nowrap;
}
.params_rule td {
  padding: 0.5rem;
}

.params_set{
   width: 100%;
}

.params_set th {
  width: 100px;
  text-align: left;
  padding: 0.5rem 3.5rem 0.5rem 0rem;
  white-space: nowrap;
  border-bottom: 0.01rem solid #f4f4f4;
}
.params_set td {
  color: var(--color-high-text);
  border-bottom: 0.01rem solid #f4f4f4;
}

.info_img img {
  width: 100%;
}
</style>
