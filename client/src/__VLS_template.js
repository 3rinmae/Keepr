import Navbar from './components/Navbar.vue';
import NewKeepModal from "./components/NewKeepModal.vue";
import KeepModal from "./components/KeepModal.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./App.vue";

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
  /* Components */
  let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
  let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
  let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {};
  let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} &
    __VLS_WithComponent<'Navbar', typeof __VLS_localComponents, "Navbar", "Navbar", "Navbar"> &
    __VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "routerView", "router-view"> &
    __VLS_WithComponent<'NewKeepModal', typeof __VLS_localComponents, "NewKeepModal", "NewKeepModal", "NewKeepModal"> &
    __VLS_WithComponent<'NewVaultModal', typeof __VLS_localComponents, "NewVaultModal", "NewVaultModal", "NewVaultModal"> &
    __VLS_WithComponent<'KeepModal', typeof __VLS_localComponents, "KeepModal", "KeepModal", "KeepModal">;
  __VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
  __VLS_components.Navbar;
  // @ts-ignore
  [Navbar,];
  __VLS_intrinsicElements.main; __VLS_intrinsicElements.main;
  __VLS_components.RouterView; __VLS_components.routerView; __VLS_components["router-view"];
  // @ts-ignore
  [RouterView,];
  __VLS_intrinsicElements.footer; __VLS_intrinsicElements.footer;
  __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
  __VLS_components.NewKeepModal;
  // @ts-ignore
  [NewKeepModal,];
  __VLS_components.NewVaultModal;
  // @ts-ignore
  [NewVaultModal,];
  __VLS_components.KeepModal;
  // @ts-ignore
  [KeepModal,];
  {
    const __VLS_0 = __VLS_intrinsicElements["header"];
    const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
    const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
    {
      const __VLS_5 = ({} as 'Navbar' extends keyof typeof __VLS_ctx ? { 'Navbar': typeof __VLS_ctx.Navbar; } : typeof __VLS_resolvedLocalAndGlobalComponents).Navbar;
      const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
      ({} as { Navbar: typeof __VLS_5; }).Navbar;
      const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
      ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
      const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
      let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
    }
    (__VLS_3.slots!).default;
  }
  {
    const __VLS_10 = __VLS_intrinsicElements["main"];
    const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
    const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
    let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
    {
      const __VLS_15 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : 'routerView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.routerView; } : 'router-view' extends keyof typeof __VLS_ctx ? { 'RouterView': (typeof __VLS_ctx)["router-view"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
      const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
      ({} as { RouterView: typeof __VLS_15; }).RouterView;
      const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
      ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
      const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
      let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
    }
    (__VLS_13.slots!).default;
  }
  {
    const __VLS_20 = __VLS_intrinsicElements["footer"];
    const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
    const __VLS_22 = __VLS_21({ ...{}, class: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: (""), });
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
    let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
  }
  {
    const __VLS_25 = __VLS_intrinsicElements["div"];
    const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
    const __VLS_27 = __VLS_26({ ...{}, class: ("modal fade"), id: ("createNewKeep"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("modal fade"), id: ("createNewKeep"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), });
    const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
    let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
    {
      const __VLS_30 = __VLS_intrinsicElements["div"];
      const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
      const __VLS_32 = __VLS_31({ ...{}, class: ("modal-dialog modal-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
      ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("modal-dialog modal-md"), });
      const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
      let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
      {
        const __VLS_35 = __VLS_intrinsicElements["div"];
        const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
        const __VLS_37 = __VLS_36({ ...{}, class: ("modal-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("modal-content"), });
        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
        let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
        {
          const __VLS_40 = __VLS_intrinsicElements["div"];
          const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
          const __VLS_42 = __VLS_41({ ...{}, class: ("modal-body p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
          ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body p-0"), });
          const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
          let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
          {
            const __VLS_45 = ({} as 'NewKeepModal' extends keyof typeof __VLS_ctx ? { 'NewKeepModal': typeof __VLS_ctx.NewKeepModal; } : typeof __VLS_resolvedLocalAndGlobalComponents).NewKeepModal;
            const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, }));
            ({} as { NewKeepModal: typeof __VLS_45; }).NewKeepModal;
            const __VLS_47 = __VLS_46({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, });
            const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
            let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
          }
          (__VLS_43.slots!).default;
        }
        (__VLS_38.slots!).default;
      }
      (__VLS_33.slots!).default;
    }
    (__VLS_28.slots!).default;
  }
  {
    const __VLS_50 = __VLS_intrinsicElements["div"];
    const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
    const __VLS_52 = __VLS_51({ ...{}, class: ("modal fade"), id: ("createNewVault"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, class: ("modal fade"), id: ("createNewVault"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), });
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
    let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
    {
      const __VLS_55 = __VLS_intrinsicElements["div"];
      const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
      const __VLS_57 = __VLS_56({ ...{}, class: ("modal-dialog modal-md"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
      ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, class: ("modal-dialog modal-md"), });
      const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
      let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
      {
        const __VLS_60 = __VLS_intrinsicElements["div"];
        const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
        const __VLS_62 = __VLS_61({ ...{}, class: ("modal-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, class: ("modal-content"), });
        const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
        let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
        {
          const __VLS_65 = __VLS_intrinsicElements["div"];
          const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
          const __VLS_67 = __VLS_66({ ...{}, class: ("modal-body p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
          ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body p-0"), });
          const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
          let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
          {
            const __VLS_70 = ({} as 'NewVaultModal' extends keyof typeof __VLS_ctx ? { 'NewVaultModal': typeof __VLS_ctx.NewVaultModal; } : typeof __VLS_resolvedLocalAndGlobalComponents).NewVaultModal;
            const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{}, "<": (true), div: (true), }));
            ({} as { NewVaultModal: typeof __VLS_70; }).NewVaultModal;
            const __VLS_72 = __VLS_71({ ...{}, "<": (true), div: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{}, "<": (true), div: (true), });
            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
            let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
          }
          (__VLS_68.slots!).default;
        }
        (__VLS_63.slots!).default;
      }
      (__VLS_58.slots!).default;
    }
    {
      const __VLS_75 = __VLS_intrinsicElements["div"];
      const __VLS_76 = __VLS_elementAsFunctionalComponent(__VLS_75);
      const __VLS_77 = __VLS_76({ ...{}, class: ("modal fade"), id: ("keepModal"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
      ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{}, class: ("modal fade"), id: ("keepModal"), tabindex: ("-1"), "aria-labelledby": ("exampleModalLabel"), "aria-hidden": ("true"), });
      const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
      let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
      {
        const __VLS_80 = __VLS_intrinsicElements["div"];
        const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
        const __VLS_82 = __VLS_81({ ...{}, class: ("modal-dialog modal-xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{}, class: ("modal-dialog modal-xl"), });
        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
        let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
        {
          const __VLS_85 = __VLS_intrinsicElements["div"];
          const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
          const __VLS_87 = __VLS_86({ ...{}, class: ("modal-content border-0 rounded-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
          ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{}, class: ("modal-content border-0 rounded-4"), });
          const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
          let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
          {
            const __VLS_90 = __VLS_intrinsicElements["div"];
            const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
            const __VLS_92 = __VLS_91({ ...{}, class: ("modal-body p-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
            ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body p-0"), });
            const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
            let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
            {
              const __VLS_95 = ({} as 'KeepModal' extends keyof typeof __VLS_ctx ? { 'KeepModal': typeof __VLS_ctx.KeepModal; } : typeof __VLS_resolvedLocalAndGlobalComponents).KeepModal;
              const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({ ...{}, }));
              ({} as { KeepModal: typeof __VLS_95; }).KeepModal;
              const __VLS_97 = __VLS_96({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_96));
              ({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{}, });
              const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
              let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
            }
            (__VLS_93.slots!).default;
          }
          (__VLS_88.slots!).default;
        }
        (__VLS_83.slots!).default;
      }
      (__VLS_78.slots!).default;
    }
    (__VLS_53.slots!).default;
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {};
  return __VLS_slots;
}
