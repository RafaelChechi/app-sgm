import { showLoading } from "@/plugins/loading";
import Service from "@/services/api/Service";
import store from "@/store";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

@Module({
  dynamic: true,
  namespaced: true,
  name: "ProjectModule",
  store,
})
export class ProjectModule extends VuexModule {
  _state: any = {
    item: {},
    items: [],
    showDelete: false,
    onEdit: false,
    onView: false,
  };

  get items() {
    return this._state.items;
  }

  get item() {
    return this._state.item;
  }

  @Action({ rawError: true })
  async createProject(payload: any): Promise<any> {
    showLoading(true);
    return await Service.post("/api/project", payload)
      .then(async (res: any) => {
        showLoading(false);
        return res;
      })
      .catch(async (err: any) => {
        //this.errorMessage(err.response.data.message);
        showLoading(false);
        throw err;
      });
  }

  @Action({ rawError: true })
  async updateProject(payload: any): Promise<any> {
    showLoading(true);
    await Service.put(`/api/project/${payload.id}`, payload)
      .then(async (res: any) => {
        showLoading(false);
        return res;
      })
      .catch(async (err: any) => {
        showLoading(false);
        throw err;
      });
  }

  @Action({ rawError: true })
  async getProjects(): Promise<any> {
    showLoading(true);
    return await Service.get("/api/project")
      .then(async (res: any) => {
        this.updateState({ items: res.data });
        showLoading(false);
        return res;
      })
      .catch(async (err: any) => {
        showLoading(false);
        throw err;
      });
  }

  @Action({ rawError: true })
  async deleteProject(id: any): Promise<any> {
    showLoading(true);
    await Service.delete(`/api/project/${id}`)
      .then(async () => {
        showLoading(false);
      })
      .catch(async (err: any) => {
        showLoading(false);
        throw err;
      });
  }

  @Mutation
  async updateState(data: any) {
    this._state = { ...this._state, ...data };
  }
}

export default getModule(ProjectModule);
