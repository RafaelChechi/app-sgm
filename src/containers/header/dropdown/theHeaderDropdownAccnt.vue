<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img :src="require('@/assets/avatars/6.jpg')" class="c-avatar-img" />
        </div>
      </CHeaderNavLink>
    </template>

    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem> <CIcon name="cil-user" />Minha Conta </CDropdownItem>

    <CDropdownDivider />

    <CDropdownItem @click="$keycloak.logoutFn">
      <CIcon name="cil-lock-locked" />Sair
    </CDropdownItem>
  </CDropdown>
</template>

<style scoped>
.c-icon {
  margin-right: 0.3rem;
}
</style>
