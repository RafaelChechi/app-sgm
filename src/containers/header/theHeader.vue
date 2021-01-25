<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none h-header-brand" to="/">
      <div class="c-sidebar-brand-full h-sidebar-brand-mobile">
        <CImg :src="require('@/assets/img/logo-so-bola.png')" fluid />
        <span>SGM</span>
      </div>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto"> </CHeaderNav>
    <CHeaderNav class="mr-4">
      Bem vindo, <br />
      {{ name }}
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumb :items="items" class="border-0 mb-0" />
    </CSubheader>
  </CHeader>
</template>
