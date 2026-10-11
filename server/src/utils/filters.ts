import mongoose from "mongoose";

interface IAppFilters {
  searchTerm: string;
  category: string;
  fuelType: string;
  brand: string;

  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

/**
 * This implements a builder pattern
 */
export class AppFilters {
  private filters: Partial<IAppFilters> = {};
  readonly model: any;

  constructor(model: any) {
    this.model = model;
  }

  setSearchTerm(searchTerm: string) {
    this.filters = {
      ...this.filters,
      searchTerm,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  setCategory(category: string) {
    this.filters = {
      ...this.filters,
      category,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  setFuelType(fuelType: string) {
    this.filters = {
      ...this.filters,
      fuelType,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  setBrand(brand: string) {
    this.filters = {
      ...this.filters,
      brand,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  setFilters(filters: Partial<IAppFilters>) {
    this.filters = {
      ...this.filters,
      ...filters,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  setPagination(currentPage: number, itemsPerPage: number, totalItems: number) {
    this.filters = {
      ...this.filters,
      currentPage,
      itemsPerPage,
      totalItems,
    };
    // console.log({ filters: this.filters });

    return this;
  }

  async filter() {
    const query: any = {};

    if (this.filters.searchTerm) {
      query.name = { $regex: this.filters.searchTerm, $options: "i" };
    }

    if (this.filters.category) {
      query.category = this.filters.category;
    }

    if (this.filters.fuelType) {
      query.fuelType = this.filters.fuelType;
    }

    if (this.filters.brand) {
      query.brand = this.filters.brand;
    }

    const skip =
      ((this.filters.currentPage || 1) - 1) * (this.filters.itemsPerPage || 10);
    const limit = this.filters.itemsPerPage || 10;

    const results = await this.model.find(query).skip(skip).limit(limit);
    const totalItems = await this.model.countDocuments(query);
    const totalPages = Math.ceil(
      totalItems / (this.filters.itemsPerPage || 10),
    );

    return {
      results,
      currentPage: this.filters.currentPage || 1,
      itemsPerPage: this.filters.itemsPerPage || 10,
      totalItems,
      totalPages,
    };
  }
}
