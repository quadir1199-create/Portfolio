import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import '../models/portfolio_data.dart';
import '../repositories/portfolio_repository.dart';

// Events
abstract class PortfolioEvent extends Equatable {
  const PortfolioEvent();

  @override
  List<Object?> get props => [];
}

class LoadPortfolioData extends PortfolioEvent {}

class RefreshPortfolioData extends PortfolioEvent {}

// States
abstract class PortfolioState extends Equatable {
  const PortfolioState();

  @override
  List<Object?> get props => [];
}

class PortfolioInitial extends PortfolioState {}

class PortfolioLoading extends PortfolioState {}

class PortfolioLoaded extends PortfolioState {
  final PortfolioData portfolioData;

  const PortfolioLoaded(this.portfolioData);

  @override
  List<Object?> get props => [portfolioData];
}

class PortfolioError extends PortfolioState {
  final String message;

  const PortfolioError(this.message);

  @override
  List<Object?> get props => [message];
}

// BLoC
class PortfolioBloc extends Bloc<PortfolioEvent, PortfolioState> {
  final PortfolioRepository repository;

  PortfolioBloc(this.repository) : super(PortfolioInitial()) {
    on<LoadPortfolioData>(_onLoadPortfolioData);
    on<RefreshPortfolioData>(_onRefreshPortfolioData);
  }

  Future<void> _onLoadPortfolioData(
    LoadPortfolioData event,
    Emitter<PortfolioState> emit,
  ) async {
    emit(PortfolioLoading());
    try {
      final portfolioData = await repository.getPortfolioData();
      emit(PortfolioLoaded(portfolioData));
    } catch (e) {
      emit(PortfolioError(e.toString()));
    }
  }

  Future<void> _onRefreshPortfolioData(
    RefreshPortfolioData event,
    Emitter<PortfolioState> emit,
  ) async {
    try {
      final portfolioData = await repository.getPortfolioData();
      emit(PortfolioLoaded(portfolioData));
    } catch (e) {
      emit(PortfolioError(e.toString()));
    }
  }
}



